<script lang='ts'>
    import { Title } from '$lib/components';
    import { fade } from 'svelte/transition';

    let formData = {
        name: '',
        email: '',
        message: ''
    };
    
    let isSubmitting = false;
    let status: 'idle' | 'success' | 'error' = 'idle';

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        isSubmitting = true;
        status = 'idle';

        try {
            const payload = {
                content: `<@541670512686923817>`,
                embeds: [{
                    title: "New Contact Form Submission",
                    description: "You have received a new message from your contact form.",
                    color: 5814783,
                    fields: [
                        { name: "Name", value: formData.name, inline: true },
                        { name: "Email", value: formData.email, inline: true },
                        { name: "Message", value: formData.message }
                    ],
                    footer: { text: "Contact Form Notification" },
                    timestamp: new Date()
                }]
            };

            const response = await fetch(import.meta.env.VITE_DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Failed to send message');
            status = 'success';
            formData = { name: '', email: '', message: '' };
        } catch (error) {
            status = 'error';
            console.error('Form submission error:', error);
        } finally {
            isSubmitting = false;
        }
    }
</script>

<div class="space-y-6">
    <Title title="Let's Work|Together"/>
    
    <form 
        on:submit={handleSubmit} 
        class="w-full rounded-lg mb-[50px] space-y-6"
        aria-label="Contact form"
    >
        <div class="form-group">
            <label for="name" class="sr-only">Name</label>
            <input 
                id="name"
                type="text" 
                required 
                name="name" 
                bind:value={formData.name}
                placeholder="Your Name" 
                disabled={isSubmitting}
                class="font-jetbrains bg-base-200 p-3 rounded-lg w-full 
               focus:outline-none focus:ring-1 focus:ring-primary 
               text-base-content placeholder:text-base-content/60
               disabled:opacity-50 disabled:cursor-not-allowed" 
                aria-label="Your name"
            />
        </div>

        <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input 
                id="email"
                type="email" 
                required 
                name="email" 
                bind:value={formData.email}
                placeholder="Your Email" 
                disabled={isSubmitting}
                class="font-jetbrains bg-base-200 p-3 rounded-lg w-full 
               focus:outline-none focus:ring-1 focus:ring-primary 
               text-base-content placeholder:text-base-content/60
               disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Your email"
            />
        </div>

        <div class="form-group">
            <label for="message" class="sr-only">Message</label>
            <textarea 
                id="message"
                required 
                name="message" 
                bind:value={formData.message}
                placeholder="Your Message" 
                disabled={isSubmitting}
                class="font-jetbrains bg-base-200 p-3 rounded-lg w-full 
               focus:outline-none focus:ring-1 focus:ring-primary 
               text-base-content placeholder:text-base-content/60
               disabled:opacity-50 disabled:cursor-not-allowed h-[150px] resize-y"
                aria-label="Your message"
            ></textarea>
        </div>

        <button 
            type="submit" 
            disabled={isSubmitting}
            class="font-jetbrains bg-primary hover:bg-primary-focus 
               text-primary-content font-medium py-2 px-4 rounded-lg
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-colors duration-200 w-full"
            aria-busy={isSubmitting}
        >
            {#if isSubmitting}
                Sending...
            {:else}
                Send Message
            {/if}
        </button>
    </form>

    {#if status === 'success'}
        <div 
            class="p-4 rounded-lg text-sm font-jetbrains bg-success/20 text-success" 
            role="alert" 
            transition:fade
        >
            Message sent successfully! I'll be in touch shortly.
        </div>
    {:else if status === 'error'}
        <div 
            class="p-4 rounded-lg text-sm font-jetbrains bg-error/20 text-error" 
            role="alert" 
            transition:fade
        >
            Failed to send message. Please try again.
        </div>
    {/if}
</div>
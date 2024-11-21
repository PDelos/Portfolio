<script lang='ts'>
    import { Title } from '$lib/components';
    let name = '';
    let email = '';
    let message = '';

    async function sendNotification(event: Event) {
        event.preventDefault();

        const payload = {
            content: `<@541670512686923817>`,
            embeds: [
                {
                    title: "New Contact Form Submission",
                    description: `You have received a new message from your contact form.`,
                    color: 5814783, // Hex color code for the embed (optional)
                    fields: [
                        {
                            name: "Name",
                            value: name,
                            inline: true
                        },
                        {
                            name: "Email",
                            value: email,
                            inline: true
                        },
                        {
                            name: "Message",
                            value: message
                        }
                    ],
                    footer: {
                        text: "Contact Form Notification"
                    },
                    timestamp: new Date()
                }
            ]
        };

        const response = await fetch(import.meta.env.VITE_DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Notification sent successfully to my discord, will be in touch shortly!');
        } else {
            alert('Failed to send notification. Please try again.');
        }
    }
</script>

<Title title="Let's Work|Together"/>
<form on:submit={sendNotification} class="w-full rounded-lg mb-[50px] space-y-6 flex flex-col">
    <input 
        type="text" 
        required 
        name="name" 
        bind:value={name}
        placeholder="Your Name" 
        class="font-jetbrains bg-base-200 p-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary text-base-content placeholder:text-base-content/60" 
    />
    <input 
        type="email" 
        required 
        name="email" 
        bind:value={email}
        placeholder="Your Email" 
        class="font-jetbrains bg-base-200 p-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary text-base-content placeholder:text-base-content/60" 
    />
    <textarea 
        required 
        name="message" 
        bind:value={message}
        placeholder="Your Message" 
        class="font-jetbrains bg-base-200 p-3 rounded-lg w-full h-[150px] focus:outline-none focus:ring-1 focus:ring-primary text-base-content placeholder:text-base-content/60"
    ></textarea>
    <button 
        type="submit" 
        class="font-jetbrains bg-primary hover:bg-primary-focus text-primary-content font-medium py-2 px-4 rounded-lg"
    >
        Submit
    </button>
</form>
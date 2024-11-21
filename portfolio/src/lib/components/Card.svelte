<script lang='ts'>
    import Icon from '@iconify/svelte';

    let { title, subtitle, description, image, date, link} = $props();

    // Split the title into two separate variables and transform to uppercase
</script>

<a href={link} class="block rounded-lg h-[200px] overflow-hidden p-4 hover:bg-base-200 relative group">
    <div class="absolute top-4 right-4 text-primary transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <Icon icon="heroicons-solid:external-link" height="16" />
    </div>
    <div class="flex items-center h-full">
        {#if image}
            <img class="h-full object-cover rounded-lg" src={image} alt={title} />
        {/if}
        <div class="px-6 py-4 flex-1">
            <div class="font-montserrat font-bold text-[35px] text-base-content">{title}</div>
            <p class="font-jetbrains text-primary text-base">{subtitle}</p>
            <p class="font-jetbrains text-primary text-base">{description}</p>
            <br/>
            <p class="font-jetbrains text-primary text-sm">{date}</p>
        </div>
    </div>
</a>
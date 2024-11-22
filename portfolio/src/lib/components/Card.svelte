<script lang='ts'>
    import Icon from '@iconify/svelte';

    let { title, subtitle, description, image, date, link, icon = true} = $props();

    // Split the title into two separate variables and transform to uppercase
</script>

<a 
  href={link} 
  class="block rounded-lg p-6 hover:bg-base-200 transition-all duration-200 relative group"
>
    <!-- External link icon -->
    <div class="absolute top-5 right-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        {#if icon}
            <Icon icon="heroicons-solid:external-link" height="16" />
        {/if}
    </div>

    <!-- Card content -->
    <div class="flex gap-4">
        {#if image}
            <div class="flex-shrink-0 w-1/5 h-[150px]">
                <img 
                    class="h-full w-full object-cover rounded-lg" 
                    src={image} 
                    alt={title}
                />
            </div>
        {/if}

        <!-- Text content -->
        <div class="flex items-center">
            <div class="space-y-2">
                <h2 class="font-montserrat font-bold text-6xl md:text-2xl text-base-content line-clamp-2">
                    {title}
                </h2>
                <p class="font-jetbrains text-primary text-s line-clamp-1">{subtitle}</p>
                <p class="font-jetbrains text-primary text-xs line-clamp-2">{description}</p>
                <!-- Date -->
                <p class="font-jetbrains text-primary text-xs mt-auto pt-2">{date}</p>
            </div>
        </div>
    </div>
</a>
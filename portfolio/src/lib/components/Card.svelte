<script lang='ts'>
    import Icon from '@iconify/svelte';

    let { title, subtitle, description, image, date, link, icon = true} = $props();
    // Split the title into two separate variables and transform to uppercase

    let padding = $state(0);
    if (image) padding = 6;
    else padding = 4;
</script>


<a 
  href={link} 
  class="block rounded-lg p-{padding} my-2 hover:bg-base-200 transition-all duration-200 relative group"
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
        <div class="flex items-center space-y-2 flex-col">
                <h2 class="font-montserrat w-full font-extrabold text-2xl text-base-content text-start">{title}</h2>
                <p class="font-jetbrains w-full text-primary text-s">{subtitle}</p>
                <p class="font-jetbrains  w-full text-primary text-xs">{description}</p>
                <div class="flex-grow"></div>
                <!-- Date -->
                <p class="font-jetbrains text-primary text-xs p-2">{date}</p>
        </div>
    </div>
</a>
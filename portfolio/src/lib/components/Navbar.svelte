<script>
    import Icon from '@iconify/svelte';
    
    // Define your navigation items with existing icons
    const navItems = [
        { name: 'Home', icon: 'mdi:home', link: '/' },
        { name: 'Projects', icon: 'mdi:folder-open', link: '/projects' },
        { name: 'About Me', icon: 'mdi:account', link: '/aboutme' },
        { name: 'Blog', icon: 'mdi:blog', link: '/blog' }
    ];
</script>



<section class="w-[400px] h-[50px] bg-[#1C1A19] rounded-2xl flex items-center justify-around">
    {#each navItems as item}
        <a href={item.link} class="relative flex items-center text-white group">
            <Icon icon={item.icon} width="24" height="24" />
            <span class="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.name}
            </span>
        </a>
    {/each}
</section>

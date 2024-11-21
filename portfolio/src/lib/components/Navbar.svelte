<script>
    import Icon from '@iconify/svelte';
    
    const navItems = [
        { name: 'Home', icon: 'mdi:home', link: '/' },
        { name: 'Projects', icon: 'mdi:folder-open', link: '/projects' },
        { name: 'About Me', icon: 'mdi:account', link: '/aboutme' },
        { name: 'Blog', icon: 'mdi:blog', link: '/blog' }
    ];
</script>

<section class="w-[400px] h-[50px] rounded-2xl flex items-center justify-around bg-base-200 shadow-md backdrop-blur-sm">
    {#each navItems as item}
        <a 
            href={item.link} 
            class="relative flex items-center group p-2 rounded-lg hover:bg-base-300 transition-all duration-200"
            aria-label={item.name}
        >
            <Icon 
                icon={item.icon} 
                width="24" 
                height="24" 
                class="text-base-content/70 group-hover:text-primary transition-colors duration-200" 
            />
            <span 
                class="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs 
                       bg-base-300 text-base-content px-2 py-1 rounded-lg shadow-lg
                       opacity-0 group-hover:opacity-100 transition-all duration-200
                       whitespace-nowrap z-10 font-medium"
            >
                {item.name}
            </span>
        </a>
    {/each}
</section>
<script lang="ts">
    import Icon  from '@iconify/svelte';

    interface Tool {
        name: string;
        icon: string;
        description: string;
    }

    let tools: Tool[] = [
        { name: 'R', icon: 'skill-icons:r-dark', description: 'Statistical computing' },
        { name: 'Git', icon: 'skill-icons:git', description: 'Version control' },
        { name: 'Docker', icon: 'skill-icons:docker', description: 'Containerization' },
        { name: 'SvelteKit', icon: 'skill-icons:svelte', description: 'Web framework' },
        { name: 'C++', icon: 'skill-icons:cpp', description: 'Programming language' },
        { name: 'Python', icon: 'skill-icons:python-dark', description: 'Programming language' },
    ];
</script>
  
<div class="p-4 grid grid-cols-2 gap-4">
    {#each tools as tool}
        <div class="block rounded-lg overflow-hidden p-2 hover:bg-base-200 relative group">
            <div class="flex items-center">
                <Icon icon={tool.icon} height='60' />
                <div class="px-[10px]">
                    <div class="font-montserrat font-bold text-[20px] text-base-content">{tool.name}</div>
                    <p class="font-jetbrains text-[14px] text-primary">{tool.description}</p>
                </div>
            </div>
        </div>
    {/each}
</div>
<script lang="ts">
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    import Icon from '@iconify/svelte';
    import type { SubmitFunction } from '@sveltejs/kit';
    import { writable } from 'svelte/store';


    // Get current theme from document
    let currentTheme = '';
    if (typeof document !== 'undefined') {
        currentTheme = document.documentElement.getAttribute('data-theme') || '';
    }

    const themes = [
        { id: 'luxury', icon: 'mdi:moon-waning-crescent', label: 'Luxury' },
        { id: 'retro', icon: 'mdi:white-balance-sunny', label: 'Retro' },
    ];

    

    const submitUpdateTheme: SubmitFunction = async ({ action }) => {
        const theme = action.searchParams.get('theme');
        if (theme && themes.map(t => t.id).includes(theme)) {
            document.documentElement.setAttribute('data-theme', theme);
            currentTheme = theme;
        }
        return Promise.resolve();
    };

    let isOpen = writable(false);
    let dropdownRef;

    function handleOutsideClick(event: Event) {
        if ($isOpen && dropdownRef && !dropdownRef.contains(event.target)) {
        isOpen.set(false);
        }
    }
</script>

<svelte:window onclick={handleOutsideClick} />

<div bind:this={dropdownRef} class="flex-none relative">
    <button 
        on:click={() => isOpen.update(open => !open)} 
        class="btn btn-base-200 p-2 group hover:bg-base-300"
    > 
        <Icon 
            icon="mdi:palette" 
            height="full"
            class="text-base-content/70 group-hover:text-primary transition-colors duration-200"
        />
    </button>
    {#if $isOpen}
        <form 
            method="POST" 
            use:enhance={submitUpdateTheme} 
            class="absolute right-0 mt-2 bg-base-100 border border-base-300 rounded-lg shadow-lg w-48 z-50"
        >
            <ul class="py-1">
                {#each themes as {id, icon, label}}
                    <li>
                        <button 
                            formaction="/?/setTheme&theme={id}&redirectTo={$page.url.pathname}" 
                            class="flex items-center gap-3 px-4 py-2 text-base-content hover:bg-base-200 w-full text-left transition-colors relative"
                            class:font-medium={currentTheme === id}
                        >
                            <div class="flex items-center gap-3 flex-1">
                                <div class="w-4 h-4 rounded-full border border-base-content flex items-center justify-center">
                                    {#if currentTheme === id}
                                        <div class="w-2 h-2 rounded-full bg-base-content"></div>
                                    {/if}
                                </div>
                                <Icon icon={icon} class="text-xl" />
                                <span>{label}</span>
                            </div>
                        </button>
                    </li>
                {/each}
            </ul>
        </form>
    {/if}
</div>
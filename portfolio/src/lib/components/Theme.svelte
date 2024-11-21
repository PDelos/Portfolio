<script lang="ts">
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';

    // List of available themes
    const themes = [
        'luxury', 'retro', 'halloween'
    ];

    // Define the submit function to update the theme with proper typing
    const submitUpdateTheme: SubmitFunction = async ({ action }) => {
        const theme = action.searchParams.get('theme');
        if (theme && themes.includes(theme)) {
            document.documentElement.setAttribute('data-theme', theme);
        }
        return Promise.resolve();
    };

    // Reactive variable to control dropdown visibility
    let showDropdown = false;

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
</script>

<div class="flex-none relative">
    <button 
        on:click={toggleDropdown} 
        class="btn btn-base-200"
    > 
        Theme
    </button>
    {#if showDropdown}
        <form 
            method="POST" 
            use:enhance={submitUpdateTheme} 
            class="absolute mt-2 bg-base-100 border border-base-300 rounded shadow-lg"
        >
            <ul class="py-2">
                {#each themes as theme}
                    <li>
                        <button 
                            formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}" 
                            class="block px-4 py-2 text-base-content hover:bg-base-200 w-full text-left"
                        >
                            {theme}
                        </button>
                    </li>
                {/each}
            </ul>
        </form>
    {/if}
</div>
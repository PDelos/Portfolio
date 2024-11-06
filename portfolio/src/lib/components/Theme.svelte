<script lang="ts">
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';


    // List of available themes
    const themes = [
        'light', 'dark'
    ];

    // Define the submit function to update the theme with proper typing
    const submitUpdateTheme: SubmitFunction = async ({ action }) => {
        const theme = action.searchParams.get('theme');
        if (theme && themes.includes(theme)) {
            document.documentElement.setAttribute('data-theme', theme);
        }
        return Promise.resolve();
    };
</script>
  
  
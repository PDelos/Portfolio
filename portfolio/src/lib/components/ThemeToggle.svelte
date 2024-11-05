<script lang="ts">
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
  
    // Define the submit function to update the theme
    const submitUpdateTheme = ({ action }) => {
      const theme = action.searchParams.get('theme');
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
      }
    };
  
    // List of available themes
    const themes = [
      'light', 'dark', 'cupcake'
    ];
  
  </script>
  
  <div class="dropdown dropdown-end">
    <!-- Button that triggers the theme dropdown -->
    <button class="btn btn-primary">Set Theme 🎨</button>
    
    <!-- Dropdown menu with theme options -->
    <ul class="dropdown-content menu p-2 bg-base-100 w-56 shadow-lg rounded-box">
      <form method="POST" use:enhance={submitUpdateTheme}>
        {#each themes as theme}
          <li>
            <button
              class="btn btn-ghost w-full"
              type="submit"
              formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
            >
              {theme}
            </button>
          </li>
        {/each}
      </form>
    </ul>
  </div>
  
  <style>
    /* Styling for dropdown and button */
    .dropdown-content {
      max-height: 200px;
      overflow-y: auto;
    }
    
    .btn {
      width: 100%;
    }
  </style>
  
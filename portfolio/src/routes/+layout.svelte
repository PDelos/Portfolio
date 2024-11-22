<script lang="ts">
    import '../app.css';
    import { Navbar, ProfileCard, ContactMe, Theme } from '$lib/components';
    import { page } from '$app/stores';
    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="w-full h-[100px] flex items-end justify-center py-[100px] relative">
        <Navbar />
        <div class="absolute top-4 right-14 z-50">
            <Theme />
        </div>
    </header>

    <!-- Main Layout -->
    <main class="flex flex-col lg:flex-row flex-grow">
        <!-- Sidebar -->
        {#if $page.url.pathname === '/'}
            <aside class="flex justify-center lg:justify-end lg:w-[40%]  px-20 lg:px-8">
                <ProfileCard />
            </aside>

            <!-- Content -->
            <section class="p-20 lg:w-[700px] lg:p-0">
                {@render children()}
                <div class="animate-on-scroll  my-10"> <ContactMe/> </div>
            </section>
        {:else}
            <!-- Content -->
            <section class="w-full p-20">
                {@render children()}
                <div class="animate-on-scroll my-10"> <ContactMe/> </div>
            </section>
        {/if}
    </main>

    <!-- Footer -->
    <footer class="flex justify-center py-10 items-end h-96">
        <h2>Made using Svelte by Pol</h2>
    </footer>
</div>
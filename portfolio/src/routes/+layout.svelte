<script lang="ts">
    import '../app.css';
    import { Navbar, ProfileCard, ContactMe, Theme } from '$lib/components';

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
        <aside class="flex justify-center lg:justify-end lg:w-[40%]  px-20 lg:px-8">
            <ProfileCard />
        </aside>

        <!-- Content -->
        <section class="p-20 lg:w-[700px] lg:p-0 space-y-8">
            {@render children()}
            <ContactMe/>
        </section>
    </main>

    <!-- Footer -->
    <footer class="flex justify-center py-10 items-end h-96">
        <h2>Made using Svelte by Pol</h2>
    </footer>
</div>
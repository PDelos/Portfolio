<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="w-full h-[100px] flex items-end justify-center py-[100px]">
        <div class="w-[350px] h-[50px] bg-gray-300"></div>
    </header>

    <!-- Main Layout -->
    <main class="flex flex-col lg:flex-row">
        <!-- Sidebar -->
        <aside class="lg:w-[40%]">
            <div class="flex h-full items-center justify-center px-28 py-5 lg:sticky lg:top-[50px] lg:h-auto lg:justify-end lg:px-10 lg:py-0">
                <div class="w-full h-[500px] bg-gray-300 lg:h-[750px] lg:w-[400px]" ></div>
            </div>
        </aside>

        <!-- Content -->
        <section class="p-20 lg:w-[700px] lg:p-0">
            {@render children()}
        </section>
    </main>
</div>
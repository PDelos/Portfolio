<script lang="ts">
</script>

<div class="space-y-8">
    <!-- Header Section -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
        <p class="text-gray-600">This is a sample page to demonstrate scrolling behavior with the fixed sidebar.</p>
    </div>

    <!-- Cards Section -->
    {#each Array(6) as _, i}
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold mb-3">Content Card {i + 1}</h2>
            <p class="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="bg-gray-100 p-4 rounded">
                <p class="text-sm text-gray-500">
                    Additional content for card {i + 1}. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    {/each}

    <!-- Feature Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {#each Array(4) as _, i}
            <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Feature {i + 1}</h3>
                <p class="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        {/each}
    </div>

    <!-- Long Text Section -->
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">About Our Service</h2>
        {#each Array(3) as _}
            <p class="mb-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        {/each}
    </div>

    <!-- Contact Section -->
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
        <p class="text-gray-600 mb-4">
            Feel free to reach out to us with any questions or concerns. We're here to help!
        </p>
        <div class="bg-gray-50 p-4 rounded">
            <p class="text-gray-700">Email: example@example.com</p>
            <p class="text-gray-700">Phone: (123) 456-7890</p>
        </div>
    </div>
</div>
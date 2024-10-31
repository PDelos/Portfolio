<script>
    export let name = "Name";
    export let title = "Title"; 
  </script>
  
<div class="w-72 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4">
    <div class="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200">
        <div class="flex h-full items-center justify-center text-gray-400">
        <svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        </div>
    </div>

    <div class="text-center">
        <div class="mb-2 h-6 bg-gray-200 text-lg font-bold">
        {name}
        </div>
        <div class="mb-4 h-4 text-sm text-gray-500">
        {title}
        </div>

        <div class="flex justify-center space-x-4">
        {#each Array(4) as _}
            <div class="h-8 w-8 rounded-full bg-gray-200"></div>
        {/each}
        </div>
    </div>
</div>
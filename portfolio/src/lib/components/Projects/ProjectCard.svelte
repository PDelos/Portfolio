<script>
    export let title;
    export let description;
    export let tech;
    export let slug;
  </script>
  
  <a 
    href="/projects/{slug}" 
    class="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p class="text-gray-600 mb-4">{description}</p>
    <div class="flex flex-wrap gap-2">
      {#each tech as technology}
        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {technology}
        </span>
      {/each}
    </div>
  </a>
  
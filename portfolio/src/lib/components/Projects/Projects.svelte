<script>
    import ProjectCard from './ProjectCard.svelte';
    
    export let projects = [
      {
        title: "Project 1",
        description: "A brief description of your first project",
        tech: ["SvelteKit", "Tailwind CSS", "TypeScript"],
        slug: "project-1"
      },
      {
        title: "Project 2",
        description: "Description of your second project",
        tech: ["React", "Node.js", "MongoDB"],
        slug: "project-2"
      }
    ];
  </script>
  
<section class="py-16 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
    <div class="grid gap-6">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>
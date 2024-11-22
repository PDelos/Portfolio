<script lang="ts">
    import { Title, Card, Tools } from '$lib/components';
    import { onMount } from 'svelte';
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      });
  
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    });
</script>

<div class="animate-on-scroll">
    <Title title="Work|Experience"/>
    <Card 
        title="Esperanto Technologies, Inc" 
        subtitle="Data Engineer" 
        description="Optimized MoE models, designed ONNX graphs, and improved model accuracy to 90%. Integrated expert layers resulting in 280% faster inference." 
        image="" 
        date="June 2024 - September 2024" 
        link="https://esperantotech.com"
    />
    <Card 
        title="Science4Tech" 
        subtitle="Data Scientist" 
        description="Enhanced oncology clinical trials efficiency through advanced ML models. Reduced adverse events by 21.4% and increased patient retention by 15%." 
        image="" 
        date="July 2023 - April 2024" 
        link="https://science4tech.health"
    />
</div>

<div class="animate-on-scroll">
    <Title title="Recent|Projects"/>
    <Card 
        title="Real Estate Predictor" 
        subtitle="Datathon 2024" 
        description="Developed a machine learning model to predict real estate prices based on various factors." 
        image="/assets/images/projects/realstate.png" 
        date="November 2024" 
        link="https://datathon.container.aed.cat/"
    />
    <Card 
        title="Datathon Web Development" 
        subtitle="Full-Stack Application" 
        description="Lead developer creating a web application using Docker, SvelteKit, and PocketBase. Achieved seamless containerization and state management." 
        image="/assets/images/projects/datathonweb.png" 
        date="Current" 
        link="https://www.datathon.cat/"
    />
    <Card 
        title="Outfit Generator" 
        subtitle="1st Place - Datathon 2023" 
        description="Developed a Python web app for generating fashion outfits using Mango Database images. Implemented a C++ entropy minimization algorithm for optimal combinations." 
        image="/assets/images/projects/outfit.png" 
        date="November 2023" 
        link="https://github.com/PDelos/Datathon_2023_outfit_generator"
    />
    <Card 
        title="RAG - Chat Bot" 
        subtitle="Retrival Augmented Generation" 
        description="Created a chatbot using RAG architecture for question answering. Implemented a web scraper to gather data from multiple sources." 
        image="/assets/images/projects/rag.png" 
        date="June 2024" 
        link="https://github.com/adriablancafort/retrieval-augmented-generation-assistant-hackupc24"
    />
</div>

<div class="animate-on-scroll">
    <Title title="Design|Tools"/>
    <Tools />
</div>

<div class="animate-on-scroll">
    <Title title="About|Me"/>
    <Card 
        title="Education" 
        subtitle="Dual Degree Program" 
        description="Bachelor's in Data Science and Engineering and Biomedical Engineering at CFIS - Polytechnic University of Catalonia (UPC). Jointly offered by Faculty of Mathematics and Engineering Schools." 
        image="" 
        date="September 2022 - June 2027" 
        link="https://cfis.upc.edu"
    />
    <Card 
        title="Honors & Awards" 
        subtitle="Academic Achievements" 
        description="Multiple awards including 1st Place at FME Datathon, Bronze Medal at BarcelonaTech Math Contest, and notable mentions in various international competitions." 
        image="" 
        date="2021 - 2023" 
        link="#honors"
    />
    <Card 
        title="Community Involvement" 
        subtitle="Leadership Roles" 
        description="Founder of UP+C Integration Bee, organizer of advanced computer science courses, and contributor to student association web app development." 
        image="" 
        date="2023 - 2024" 
        link="#leadership"
    />
</div>
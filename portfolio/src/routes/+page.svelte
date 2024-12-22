<script lang="ts">
    import { Title, Card, Tools, ContactMe } from '$lib/components';
    import { onMount } from 'svelte';
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.setAttribute('data-in-view', entry.isIntersecting.toString());
        });
      });
  
      document.querySelectorAll('[data-animation]').forEach((el) => {
        observer.observe(el);
      });
    });
</script>

<div class="space-y-12"> 
    <div class="transform transition-all duration-700 opacity-0 data-[in-view=true]:opacity-100" data-animation>
        <div class="mt-6 mb-2">
            <Title title="Work|Experience"/>
        </div>    
        <div class="">
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
                link="https://s4t.health"
            />
        </div>
    </div>

    <div class="transform transition-all duration-700 opacity-0 data-[in-view=true]:opacity-100" data-animation>
        <div class="mt-6 mb-2">
            <Title title="Recent|Projects"/>
        </div>
        <div class="">
            <Card 
                title="Real Estate Predictor" 
                subtitle="Datathon 2024" 
                description="Developed a machine learning model to predict real estate prices based on various factors." 
                image="/assets/images/projects/realstate.png" 
                date="November 2024" 
                link="https://datathon.container.aed.cat/"
            />
            <Card 
                title="Web Development" 
                subtitle="Full-Stack Application" 
                description="Lead developer creating a web application using Docker, SvelteKit, and PocketBase." 
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
    </div>

    <div class="transform transition-all duration-700 opacity-0 data-[in-view=true]:opacity-100" data-animation>
        <div class="mt-6 mb-2">
            <Title title="Design|Tools"/>
        </div>
        <Tools />
    </div>

    <div class="transform transition-all duration-700 opacity-0 data-[in-view=true]:opacity-100" data-animation>
        <div class="mt-6 mb-2">
            <Title title="About|Me"/>
        </div>
        <div class="">
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
                link=""
                icon={false}
            />
            <Card 
                title="Community Involvement" 
                subtitle="Leadership Roles" 
                description="Founder of UP+C Integration Bee, organizer of advanced computer science courses, and contributor to student association web app development." 
                image="" 
                date="2023 - 2024" 
                link=""
                icon={false}
            />
        </div>
    </div>
</div>
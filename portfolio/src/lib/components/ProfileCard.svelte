<script lang='ts'>
    import Icon from '@iconify/svelte';
    import { cubicOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    import { onMount } from 'svelte';

    export let name: string = 'Pol Santos';
    export let description: string = 'A Data Scientist with a passion for ML algorithms.';

    const profileImage: string = "/assets/images/photo.jpeg";
    interface Social {
        icon: string;
        name: string;
        link: string;
    }
    const socials: Social[] = [
        {
            icon: "line-md:linkedin",
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/pol-de-los-santos-subirats/"
        },
        {
            icon: "line-md:discord",
            name: "Discord",
            link: "https://discordapp.com/users/541670512686923817"
        },
        {
            icon: "line-md:email",
            name: "Email",
            link: "mailto:delossantospol001@gmail.com"
        },
        {
            icon: "line-md:github",
            name: "GitHub",
            link: "https://github.com/PDelos"
        },
    ];

    let nameTweened = tweened<number>(0, { duration: 1000, easing: cubicOut });
    let descriptionTweened = tweened<number>(0, { duration: 4000, easing: cubicOut });

    onMount(() => {
        nameTweened.set(name.length);
        descriptionTweened.set(description.length);
    });

    function getTextSlice(text: string, length: number): string {
        return text.slice(0, Math.round(length));
    }
</script>

<!-- DIV CONTAINER WITH PROFILE CARD -->
<div class="flex items-center justify-center w-full h-[600px] bg-base-200 shadow-lg rounded-3xl lg:w-[325px] lg:sticky lg:top-[8%] transition-all duration-300 hover:shadow-xl">
    <div class="flex flex-col h-full w-[325px] space-y-4 p-8">
        <!-- IMAGE -->
        <img 
            src={profileImage} 
            alt={name} 
            class="w-full rounded-3xl shadow-md" 
        />
        
        <h2 class="font-montserrat font-extrabold text-4xl text-center py-[10px] text-base-content">
            <span class="inline-block w-full text-center">
                {getTextSlice(name, $nameTweened)}
            </span>
        </h2>
        
        <div class="flex-grow"></div>

        <p class="font-jetbrains text-[18px] text-center text-base-content">
            <span class="inline-block w-full text-center">
                {getTextSlice(description, $descriptionTweened)}
            </span>
        </p>

        <div class="w-full h-[30px] flex flex-row justify-center space-x-6">
            {#each socials as s}
                <a 
                    href={s.link} 
                    class="text-base-content hover:text-primary transition-colors duration-200"
                    aria-label={s.name}
                > 
                    <Icon icon={s.icon} height="full" />
                </a>
            {/each}
        </div>
    </div>
</div>
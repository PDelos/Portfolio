<!-- ProfileCard.svelte -->
<script>
    import profileImage from '$lib/assets/images/foto.jpeg';
    import Icon from '@iconify/svelte';

    export let name = 'Pol Santos';
    export let description = 'A Data Scientist with a passion for ML algorithms.';

    const socials = [
        {
            icon: "akar-icons:linkedin-fill",  // Iconify icon name for LinkedIn
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/yourprofile"
        },
        {
            icon: "akar-icons:twitter-fill",    // Iconify icon name for Twitter
            name: "Twitter",
            link: "https://twitter.com/yourprofile"
        },
        {
            icon: "akar-icons:instagram-fill",  // Iconify icon name for Instagram
            name: "Instagram",
            link: "https://www.instagram.com/yourprofile"
        }
    ];
</script>

<div class="flex items-center justify-center w-full h-[600px] bg-white rounded-3xl lg:w-[325px] lg:sticky lg:top-[8%]">
    <div class="flex flex-col items-center h-full w-[350px] space-y-4 p-10">
        <img src={profileImage} alt={name} class="w-full rounded-3xl" />
        <h2 class="font-sora text-black text-4xl font-bold mb-2 text-center py-[10px]">{name}</h2>
        
        <div class="flex-grow"></div> <!-- This div will take up the remaining space -->

        <p class="text-gray-500 text-[20px] text-center">{description}</p>
        <div class="w-full h-[5%] flex flex-row justify-center space-x-6">
            {#each socials as s}
                <a href={s.link} class="flex items-center text-gray-500"> <!-- Change text-blue-500 to your desired color -->
                    <Icon icon={s.icon} height="full" class="text-current" />
                </a>
            {/each}
        </div>
    </div>
</div>

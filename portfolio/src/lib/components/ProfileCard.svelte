<!-- ProfileCard.svelte -->
<script>
    import profileImage from '/assets/images/foto.jpeg';
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
        },
        {
            icon: "akar-icons:instagram-fill",  // Iconify icon name for Instagram
            name: "Instagram",
            link: "https://www.instagram.com/yourprofile"
        }
    ];
</script>


<!-- DIV CONTAINER WITH PROFILE CARD -->
<div class="flex flex-col  items-center justify-center w-full h-[600px] bg-white rounded-3xl lg:w-[325px] lg:sticky lg:top-[8%]">
    <div class="flex flex-col h-full w-[325px] space-y-4 p-8">
        <!-- IMAGE -->
        <img src={profileImage} alt={name} class="w-full rounded-3xl" />
        <!-- NAME -->
        <h2 class="text-black text-4xl font-montserrat font-extrabold mb-2 text-center py-[10px]">{name}</h2>
        <!-- This div will take up the remaining space -->
        <div class="flex-grow"></div>
        <!-- DESCRIPTION -->
        <p class="text-gray-500 text-[18px] font-jetbrains text-center">{description}</p>
        <!-- SOCIALS -->
        <div class="w-full h-[24px] flex flex-row justify-center space-x-6">
            {#each socials as s}
                <a href={s.link} class="flex items-center text-gray-500">
                    <Icon icon={s.icon} height="full" />?
                </a>
            {/each}
        </div>
    </div>
</div>

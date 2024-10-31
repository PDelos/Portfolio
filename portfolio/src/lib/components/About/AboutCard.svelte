<script>
    export let technicalInterests = [
        "Web Development",
        "User Interface Design",
        "Backend Architecture"
    ];

    export let personalInterests = [
        "Open Source Contributing",
        "Technical Writing",
        "Community Building"
    ];
</script>

<section class="py-16 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Interests & Skills</h2>
        <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-700">Technical Interests</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
            {#each technicalInterests as interest}
                <li>{interest}</li>
            {/each}
            </ul>
        </div>
        <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-700">Personal Interests</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
            {#each personalInterests as interest}
                <li>{interest}</li>
            {/each}
            </ul>
        </div>
        </div>
    </div>
</section>
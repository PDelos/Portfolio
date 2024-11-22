<script lang='ts'>
    let { title = '' } = $props();

    // Split the title into two separate variables and transform to uppercase
    let [titlePart1, titlePart2] = title.split('|').map(part => part.trim());
</script>

<div class="flex flex-col items-center lg:items-start">
    <div class="font-montserrat text-[100px] font-extrabold leading-none uppercase tracking-tight text-center lg:text-left">
        <h1 class="text-base-content">{titlePart1}</h1>
        <h2 class="text-primary">{titlePart2}</h2>
    </div>
</div>
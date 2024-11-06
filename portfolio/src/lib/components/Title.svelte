<script lang='ts'>
    let { title = '' } = $props();

    // Split the title into two separate variables and transform to uppercase
    let [titlePart1, titlePart2] = title.split('|').map(part => part.trim());
</script>

<div class="flex flex-col items-start">
    <div class="font-montserrat text-[100px] font-extrabold leading-none uppercase">
        <h2 class="text-white">{titlePart1}</h2>
        <h2 class="text-[#353334]">{titlePart2}</h2>
    </div>
</div>
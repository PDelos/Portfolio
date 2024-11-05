<script lang='ts'>
    let { title = '' } = $props();

    // Split the title into two separate variables and transform to uppercase
    let [titlePart1, titlePart2] = title.split('|').map(part => part.trim());
</script>

<div class="flex flex-col items-start">
    <div class="font-montserrat text-[100px] font-extrabold leading-none uppercase">
        <span class="text-white">{titlePart1}</span>
        <span class="text-[#353334]">{titlePart2}</span>
    </div>
</div>
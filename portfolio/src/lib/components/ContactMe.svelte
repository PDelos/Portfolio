<script lang='ts'>
    import { Title } from '$lib/components';
</script>


<Title title="Let's Work|Together"/>
<div class="w-full rounded-lg mb-[50px] space-y-6 flex flex-col">
    <input type="text" required name="name" placeholder="Your Name" class="font-jetbrains bg-[#353334] p-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-500" />
    <input type="text" required name="email" placeholder="Your Email" class="font-jetbrains bg-[#353334] p-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-500" />
    <textarea required name="message" placeholder="Your Message" class="font-jetbrains bg-[#353334] p-3 rounded-lg w-full h-[150px] focus:outline-none focus:ring-1 focus:ring-green-500"></textarea>
    <button type="submit" class="font-jetbrains bg-green-500 hover:bg-green-400 text-white font-medium py-2 px-4 rounded-lg">Submit</button>
</div>
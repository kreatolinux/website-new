<script>
	import { Badge } from 'flowbite-svelte'
</script>

<div class="flex h-screen bg-red-50">
   <div class="w-full h-full pb-60 pl-7 flex">
      <div class="m-auto">
        <h1 class="text-4xl pl-10 p-7 md:text-6xl font-extrabold drop-shadow-lg">A distro made for <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">tinkerers</span></h1>
	<h2 class="text-2xl md:text-2xl pl-10 font-extrabold">A Linux distribution that puts tinkering as its main focus.</h2>
      </div>
   </div>
</div>

<div class="flex h-screen bg-green-50">
   <div class="w-full h-full flex">              
      <div class="ml-20 my-auto">
        <h1 class="text-6xl font-extrabold drop-shadow-lg">Made for modularity</h1>
        <h2 class="text-2xl font-extrabold">Actually make the distro your own.</h2>       
      </div>

      <div class="ml-20 my-auto">
      	<h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">With easy configuration of the source tree, you can customize Kreato Linux from the userland to the window manager.</h2>
      </div>
   </div>
</div>


<div class="flex h-screen bg-orange-50">
   <div class="w-full h-full flex">              
      <div class="ml-20 my-auto">
        <h1 class="text-6xl font-extrabold drop-shadow-lg">Minimal</h1>
        <h2 class="text-2xl font-extrabold">Make your bloat-hater friends happy.</h2>       
      </div>

      <div class="ml-20 my-auto">
        <h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">Kreato Linux rootfs is the lightest rootfs' you can get your hands on. It only has the bare minimum and not much else.</h2> 
      </div>
   </div>
</div>


<div class="flex h-screen bg-emerald-50">
   <div class="w-full h-full flex">              
      <div class="ml-20 my-auto">
      	<Badge border color="green">New</Badge>
        <h1 class="text-6xl font-extrabold drop-shadow-lg">Compatible</h1>            
        <h2 class="text-2xl font-extrabold">Your friend even if you hate systemd or want to use it.</h2>     
      </div>

      <div class="ml-20 my-auto">
      	<h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">JumpStart, Kreato Linux's service manager supports 4 backends and counting. Never fight over service managers again. <a class="text-emerald-500" href="https://linux.kreato.dev/jumpstart">Learn more</a></h2>                                   
      </div>
   </div>
</div>


<div class="flex h-screen bg-lime-50">
   <div class="w-full h-full flex">              
      <div class="ml-20 my-auto">
      	<Badge border color="green">New</Badge>
        <h1 class="text-6xl font-extrabold drop-shadow-lg">Immutability</h1>            
        <h2 class="text-2xl font-extrabold">Now made easy.</h2>     
      </div>

      <div class="ml-20 my-auto">
        <h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">With the ability to quickly change and integrate packages onto the rootfs, Kreato Linux doesnt compromise on flexibility for immutability.</h2>                                   
      </div>
   </div>
</div>


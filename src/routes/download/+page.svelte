<script>
  import { Button } from 'flowbite-svelte';
</script>

<div class="flex h-screen bg-red-50">
   <div class="w-full h-full flex">              
      <div class="ml-20 my-auto">
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Download</h1>
        <h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">Download today!</h2>                                   
        <h2 class="text-[1rem] font-extrabold drop-shadow-lg">Please know that Kreato Linux is still in alpha stages and anything can break at any moment.</h2>
        <div class="mt-5 my-auto">
                <Button href="https://nightly.link/kreatolinux/src/workflows/build-rootfs/master">Download nightly</Button>
        </div>
      </div>
   </div>
</div>


<div class="flex h-screen bg-green-50">
   <div class="w-full h-full flex">
      <div class="ml-20 my-auto">
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Docker</h1>
	<h2 class="text-[1.3rem] font-extrabold drop-shadow-lg">Fastest way to try Kreato Linux</h2>
	<h2 class="text-[1rem] font-extrabold drop-shadow-lg">You can find Docker images here.</h2>
        <div class="mt-5 my-auto">
		<Button href="https://hub.docker.com/u/kreato">Docker Hub</Button>
		<Button href="https://github.com/orgs/kreatolinux/packages">Github Packages</Button>
        </div>
      </div>
   </div>
</div>


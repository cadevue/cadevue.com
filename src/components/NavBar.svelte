<script>
  import { onMount } from "svelte";
  let isOpen = $state(false);
  let width = $state(window.innerWidth);

  function toggleMenu() {
    isOpen = !isOpen;
  }
  onMount(() => {
    window.addEventListener("resize", () => {
      width = window.innerWidth;
    });
  });
</script>
<nav 
    class="{(isOpen && width < 640) && "bg-main-black fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center w-full"}"
>
  <!-- Mobile menu button -->
  <button 
    onclick={toggleMenu}
    class="sm:hidden text-main-light absolute top-10 right-8"
    aria-label="Toggle menu"
  >
    <span class="text-2xl">{isOpen ? '✕' : '☰'}</span>
  </button>
  <!-- Navigation links -->
  <ul class="bg-main-black gap-6 sm:flex text-center list-none" class:hidden={!isOpen}>
    <li class="ml-0"> <a href="/" class="no-underline text-xl mt-4 inline-block sm:mt-0">Home</a> </li>
    <li class="ml-0"> <a href="/projects" class="no-underline text-xl mt-4 inline-block sm:mt-0">Projects</a> </li>
    <li class="ml-0"> <a href="/articles" class="no-underline text-xl mt-4 inline-block sm:mt-0">Articles</a> </li>
    <li class="ml-0"> <a href="/contact" class="no-underline text-xl mt-4 inline-block sm:mt-0">Contact</a> </li>
  </ul>
</nav>
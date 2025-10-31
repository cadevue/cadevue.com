<script>
    import ProjectCard from "./ProjectCard.svelte";
    const { projects } = $props();
</script>


<div class="grid grid-cols-1 gap-6 my-6 lg:grid-cols-2">
    {#if projects.length === 0}
        <p class="text-main-black">No projects found</p>
    {:else}
        {#each projects as project}
            <ProjectCard  
                title={project.data.title} 
                tags={project.data.tags}
                img={project.data.poster.src}
                alt={project.data.poster.alt} 
                slug={project.slug} 
            />
        {/each}
    {/if}
</div>

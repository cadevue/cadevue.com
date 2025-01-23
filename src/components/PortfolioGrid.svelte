<script>
    import ProjectCard from "./ProjectCard.svelte";
    const { projects, appearDelay, anchorElmt } = $props();
</script>


<div class="grid grid-cols-1 gap-6 my-6 md:grid-cols-2">
    {#if projects.length === 0}
        <p class="text-main-light">No projects found</p>
    {:else}
        {#each projects as project, idx}
            <ProjectCard  
                title={project.data.title} 
                tags={project.data.tags}
                img={project.data.poster.src}
                alt={project.data.poster.alt} 
                slug={project.slug} 
                aos={{ type: "fade-up",  delay: appearDelay + idx * 200, anchor: anchorElmt }}
            />
        {/each}
    {/if}
</div>
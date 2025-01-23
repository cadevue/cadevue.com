<script>
    import PortfolioGrid from "./PortfolioGrid.svelte";
    import { activeFilters } from "../state.svelte.js";

    let { projects, initialDelay, anchorElmt } = $props();

    $effect(() => {
        initialDelay = 0;
    });

    const filterProjectsByTags = (project) => {
        if (activeFilters.tags.length === 0) return false;

        const tags = project.data.tags;
        return activeFilters.tags.every(tag => tags.includes(tag));
    }
</script>

<PortfolioGrid projects={projects.filter(filterProjectsByTags)}
    initialDelay={initialDelay} anchorElmt={anchorElmt} 
/>
<script>
    import PortfolioGrid from "./PortfolioGrid.svelte";
    import { activeFilters } from "../state.svelte.js";

    let { projects, appearDelay, anchorElmt } = $props();

    $effect(() => {
        appearDelay = 0;
    });

    const filterProjectsByTags = (project) => {
        if (activeFilters.tags.length === 0) return false;

        const tags = project.data.tags;
        return activeFilters.tags.every(tag => tags.includes(tag));
    }
</script>

<PortfolioGrid projects={projects.filter(filterProjectsByTags)}
    appearDelay={appearDelay} anchorElmt={anchorElmt}
/>
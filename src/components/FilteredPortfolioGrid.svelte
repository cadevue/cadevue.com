<script>
    import PortfolioGrid from "./PortfolioGrid.svelte";
    import { activeFilters } from "../state.svelte.js";
    import { labelToTagValue } from "../utils.ts";
    import Chip from "./Chip.svelte";

    let { projects, tags, appearDelay, anchorElmt } = $props();
    const tagValues = tags.map(labelToTagValue);

    const isNoneSelected = $derived(activeFilters.tags.length === 0);

    $effect(() => {
        appearDelay = 0;

        const urlParams = new URLSearchParams(window.location.search);
        const tagParam = urlParams.get("tag");

        if (tagParam) {
            activeFilters.tags = [tagParam];
        } else {
            activeFilters.tags = tagValues;
        }
    });

    const toggleAllFilter = () => {
        if (isNoneSelected) {
            activeFilters.tags = tagValues;
        } else {
            activeFilters.tags = [];
        }
    }

    const filterProjectsByTags = (project) => {
        if (activeFilters.tags.length === 0) return false;

        const tags = project.data.tags.map(tag => labelToTagValue(tag));
        return activeFilters.tags.every(tag => tags.includes(tag));
    }
</script>

<div class="w-full h-fit flex flex-col justify-between gap-2 lg:flex-row lg:gap-10">
    <div class="mt-4 h-fit w-full flex flex-col items-start gap-2 lg:w-48 lg:mt-6">
        <p data-aos="fade-up" data-aos-delay="600" data-aos-anchor={anchorElmt}>Filter by Tags</p>
        <button class="underline" data-aos="fade-up" data-aos-delay="600" data-aos-anchor={anchorElmt} onclick={toggleAllFilter}>
            {isNoneSelected ? "Select All" : "Clear All"}
        </button>
        <div class="flex flex-wrap gap-2 mt-2 lg:mt-4 lg:w-52" data-aos="fade-up" data-aos-delay="700" data-aos-anchor={anchorElmt}>
            {#each tags as tag}
                <Chip label={tag} />
            {/each}
        </div>
    </div>
    <div class="h-0.5 w-full bg-main-gray mt-4 mb-2 lg:mb-0 lg:w-1 lg:h-screen"
        data-aos="fade-up" data-aos-delay={(700 + tags.length * 100).toString()} data-aos-anchor={anchorElmt}
    ></div>
    <div class="flex-1">
        <PortfolioGrid projects={projects.filter(filterProjectsByTags)}
            appearDelay={appearDelay} anchorElmt={anchorElmt}
        />
    </div>
</div>

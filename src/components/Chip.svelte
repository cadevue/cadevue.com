<script>
    import { activeFilters } from "../state.svelte";

    let { label, active } = $props();
    let isActive = $state(active);

    const updateFilter = () => {
        const appearInFilter = activeFilters.tags.includes(label);

        if (appearInFilter && !$state.snapshot(isActive)) {
            activeFilters.tags.splice(activeFilters.tags.indexOf(label), 1);
        } else if (!appearInFilter && $state.snapshot(isActive)) {
            activeFilters.tags.push(label);
        }
    }

    const handleClick = () => {
        isActive = !isActive;
        updateFilter();
    }

    updateFilter();
</script>

<button class={`px-3 py-1 border rounded-md
        ${isActive ? "border-main-red bg-main-red text-main-light" : "border-main-gray bg-none text-main-black"}`
    }
    onclick={handleClick}
>
    {label}
</button>

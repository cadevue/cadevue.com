<script>
    import { activeFilters } from "../state.svelte";
    import { labelToTagValue } from "../utils";

    let { label } = $props();
    let isActive = $derived(activeFilters.tags.includes(labelToTagValue(label)));

    const handleClick = () => {
        if (isActive) {
            activeFilters.tags = activeFilters.tags.filter(tag => tag !== labelToTagValue(label));
        } else {
            activeFilters.tags = [...activeFilters.tags, labelToTagValue(label)];
        }
    }
</script>

<button class={`px-3 py-1 border rounded-md
        ${isActive ? "border-main-red bg-main-red text-main-light" : "border-main-gray bg-none text-main-black"}`
    }
    onclick={handleClick}
>
    {label}
</button>

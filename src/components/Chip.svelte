<script>
    import { activeFilters } from "../state.svelte";

    let { label, initialValue } = $props();
    let active = $state(initialValue);
    activeFilters.tags = initialValue ? [...activeFilters.tags, label] : activeFilters.tags;

    const handleClick = () => {
        active = !active;
        activeFilters.tags = active ? [...activeFilters.tags, label] : activeFilters.tags.filter(tag => tag !== label);
    }
</script>

<button class={`px-3 py-1 border rounded-md
        ${active ? "border-main-red bg-main-red text-main-light" : "border-main-gray bg-none text-main-black"}`
    }
    onclick={handleClick}
>
    {label}
</button>

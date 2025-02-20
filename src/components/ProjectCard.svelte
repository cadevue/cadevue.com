<script>
    import { labelToTagValue } from "../utils";

    const { title, tags, img, alt, slug, aos } = $props();
</script>

<div class="relative w-full aspect-video rounded-lg"
    data-aos={aos?.type} data-aos-anchor={aos?.anchor} data-aos-delay={aos?.delay}
>
    <a class="absolute bottom-0 w-full bg-main-gray flex items-end no-underline" href={`/project/${slug}`}
        data-astro-prefetch
    >
        <img src={img} 
            srcset={`
                ${img}tr=f-webp,w-480 480w,
                ${img}tr=f-webp,w-768 768w,
            `}
            sizes="(max-width: 480px) 480px, 768px"
            alt={alt} class="w-full aspect-video rounded-lg"
        />
    </a>
    <div class="absolute bottom-0 w-full h-1/2 z-10 text-main-light p-5 flex flex-col justify-end 
        bg-gradient-to-t from-neutral-900 to-transparent rounded-lg pointer-events-none gap-0.5 sm:gap-1
    ">
        <h2 class="line-clamp-1">{title}</h2>
        <div class="flex gap-1 pointer-events-auto flex-wrap">
            {#each tags.slice(0, 3) as tag}
                <a href={`/projects?tag=${labelToTagValue(tag)}`}
                    class="text-main-light bg-main-red rounded-full px-3 py-0.5 text-xs 
                    lg:text-sm no-underline hover:text-main-light"
                    data-astro-prefetch='hover'
                >
                    { tag }
                </a>
            {/each}

            <!-- the rest, show ... -->
            {#if tags.length > 3}
                <a href={`/project/${slug}`}
                    class="text-main-light bg-main-red rounded-full px-3 py-0.5 text-xs 
                    lg:text-sm no-underline hover:text-main-light"
                    data-astro-prefetch='hover'
                >
                    ...
                </a>
            {/if}
        </div>
    </div>
</div>
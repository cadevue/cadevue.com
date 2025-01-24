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
                ${img}?tr=f-avif,w-480 480w,
                ${img}?tr=f-avif,w-768 768w,
            `}
            sizes="(max-width: 480px) 480px, 768px"
            alt={alt} class="w-full aspect-video rounded-lg"
        />
    </a>
    <div class="absolute bottom-0 w-full h-1/2 z-10 text-main-light px-6 py-6 flex flex-col justify-end 
        bg-gradient-to-t from-main-black to-transparent rounded-lg pointer-events-none gap-2
    ">
        <h2>{title}</h2>
        <div class="flex gap-2.5 pointer-events-auto flex-wrap">
            {#each tags as tag}
                <a href={`/projects?tag=${labelToTagValue(tag)}`} 
                    class="text-main-light bg-main-red rounded-full px-3 py-0.5 text-sm 
                    lg:text-base no-underline hover:text-main-light"
                    data-astro-prefetch='hover'
                >
                    { tag }
                </a>
            {/each}
        </div>
    </div>
</div>
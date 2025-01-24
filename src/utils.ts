const specialTags : {[key: string]: string} = {
    'C#' : 'csharp'
}

export const labelToTagValue = (label: string) => {
    return specialTags[label] || label.toLowerCase().replace(/\s/g, '-');
}
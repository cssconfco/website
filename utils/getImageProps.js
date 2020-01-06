export const getImageAlt = img => img && img.alt
export const getImageUrlForLink = img => img && (img.url || img.src)
export const getImageUrlForCSS = img => img && `url(${img.url || img.src})`

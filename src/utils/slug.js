export const createSlug = (product) => {
  return `${product.id}-${product.name
    .toLowerCase()
    .replace(/\s+/g, '-')}`
}
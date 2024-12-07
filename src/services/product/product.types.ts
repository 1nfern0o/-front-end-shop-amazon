export type TypeProductData = {
    name: string
    price: number
    description?: string
    images: string[]
    categoryId: number
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort | string
    searchTerm?: string
    page?: string | number | null
    perPage?: string | number
    rating?: string
    minPrice?: string
    maxPrice?: string
    categoryId?: string
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}
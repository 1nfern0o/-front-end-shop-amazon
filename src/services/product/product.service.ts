import { axiosClassic, instanse } from '@/src/api/api.interceptor'
import { IPaymentResponce } from '@/src/types/payment.interface'
import { TypeProductData, TypeProductDataFilters } from './product.types'
import { IProduct, TypePaginationProducts } from '@/src/types/product.interface'

export const ProductService = {
    async getAll(queryData = {} as TypeProductDataFilters) {
        const { data } = await axiosClassic<TypePaginationProducts>({
            url: '/products',
            method: 'GET',
            params: queryData
        })
        return data
    },

    async getSimilar(productId: number) {
        return axiosClassic<IProduct[]>({
            url: `/products/similar/${productId}`,
            method: 'GET'
        })
    },

    async getBySlug(slug: string) {
        return axiosClassic<IProduct>({
            url: `/products/by-slug/${slug}`,
            method: 'GET'
        })
    },

    async getByCategory(categorySlug: string) {
        return axiosClassic<IProduct[]>({
            url: `/products/by-category/${categorySlug}`,
            method: 'GET'
        })
    },

    async getById(productId: number) {
        return instanse<IProduct>({
            url: `/products/${productId}`,
            method: 'GET'
        })
    },

    async create(name: string) {
        return instanse<IProduct>({
            url: '/products',
            method: 'POST'
        })
    },

    async update(id: number, data: TypeProductData) {
        return instanse<IProduct>({
            url: `/products/${id}`,
            method: 'PUT',
            data
        })
    },

    async delete(id: number) {
        return instanse<IProduct>({
            url: `/products/${id}`,
            method: 'DELETE'
        })
    }
}
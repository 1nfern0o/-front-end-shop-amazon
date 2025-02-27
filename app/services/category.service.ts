import { getContentType } from '@/app/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { axiosClassic, instanse } from '@/app/api/api.interceptor'
import { ICategory } from '@/app/types/category.interface'

export const CategoryService = {
    async getAll() {
        return axiosClassic<ICategory[]>({
            url: '/categories',
            method: 'GET'
        })
    },

    async getById(id: number) {
        return instanse<ICategory>({
            url: `/categories/${id}`,
            method: 'GET'
        })
    },

    async getBySlug(slug: string) {
        return axiosClassic<ICategory>({
            url: `/categories/by-slug/${slug}`,
            method: 'GET'
        })
    },

    async create(name: string) {
        return instanse<ICategory>({
            url: '/categories',
            method: 'POST',
            data: { name }
        })
    },

    async update(id: number, name: string) {
        return instanse<ICategory>({
            url: `/categories/${id}`,
            method: 'PUT',
            data: { name }
        })
    },

    async delete(id: number) {
        return instanse<ICategory>({
            url: `/categories/${id}`,
            method: 'DELETE'
        })
    }
}
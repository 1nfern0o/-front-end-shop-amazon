import { getContentType } from '@/src/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/src/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { axiosClassic, instanse } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/types/category.interface'
import { IReview } from '@/src/types/review.interface'

type TypeData = {
    rating: number
    text: string
}

export const ReviewService = {
    async getAll() {
        return axiosClassic<IReview[]>({
            url: '/reviews',
            method: 'GET'
        })
    },

    async getAverageByProduct(productId: number) {
        return instanse<IReview[]>({
            url: `/reviews/average-by-product/${productId}`,
            method: 'GET'
        })
    },

    async leave(productId: number, data: TypeData) {
        return instanse<IReview>({
            url: `/reviews/leave/${productId}`,
            method: 'POST',
            data
        })
    }
}
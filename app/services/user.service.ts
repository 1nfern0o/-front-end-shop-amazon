import { getContentType } from '@/app/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { instanse } from '@/app/api/api.interceptor'
import { ICategory } from '@/app/types/category.interface'
import { IReview } from '@/app/types/review.interface'
import { IFullUser, IUser } from '@/app/types/user.interface'

type TypeData = {
    email: number
    password?: string
    name?: string
    avatarPath?: string
    phone?: string
}

export const UserService = {
    async getProfile() {
        return instanse<IFullUser>({
            url: '/user/profile',
            method: 'GET'
        })
    },

    async updateProfile(data: TypeData) {
        return instanse<IUser>({
            url: '/user/profile',
            method: 'PUT',
            data
        })
    },

    async toggleFavorite(productId: number) {
        return instanse<IUser>({
            url: `/user/profile/favorites/${productId}`,
            method: 'PATH'
        })
    }
}
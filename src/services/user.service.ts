import { getContentType } from '@/src/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/src/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { instanse } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/types/category.interface'
import { IReview } from '@/src/types/review.interface'
import { IFullUser, IUser } from '@/src/types/user.interface'

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
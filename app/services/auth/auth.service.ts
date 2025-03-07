import { getContentType } from '@/app/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'
import { axiosClassic, instanse } from '@/app/api/api.interceptor'

export const AuthService = {
    async main(type: 'login' | 'register', data: IEmailPassword) {
        const response = await axiosClassic<IAuthResponse>({
            url: `/auth/${type}`,
            method: 'POST',
            data
        })

        if (response.data.accessToken) await saveToStorage(response.data)

        return response.data
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await instanse.post<string, { data: IAuthResponse }>(
            '/auth/login/access-token',
            { refreshToken }
        )

        if (response?.data?.accessToken) saveToStorage(response.data)

        return response
    }
}
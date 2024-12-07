import { getContentType } from '@/src/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/src/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'
import { axiosClassic, instanse } from '@/src/api/api.interceptor'
import { REFRESH_TOKEN } from '@/src/constants/token.constants'

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
        const refreshToken = Cookies.get(REFRESH_TOKEN)

        const response = await instanse.post<string, { data: IAuthResponse }>(
            '/auth/login/access-token',
            { refreshToken }
        )

        if (response?.data?.accessToken) saveToStorage(response.data)

        return response
    }
}
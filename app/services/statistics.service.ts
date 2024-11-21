import { instanse } from '@/app/api/api.interceptor'
import { IStatisticsResponse } from '@/app/types/statistics.interface'

type TypeData = {
    rating: number
    text: string
}

export const StatisticsService = {
    async getMain() {
        return instanse<IStatisticsResponse[]>({
            url: '/statistics/main',
            method: 'GET'
        })
    }
}
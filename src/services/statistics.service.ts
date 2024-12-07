import { instanse } from '@/src/api/api.interceptor'
import { IStatisticsResponse } from '@/src/types/statistics.interface'

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
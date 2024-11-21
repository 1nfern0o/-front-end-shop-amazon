import { instanse } from '@/app/api/api.interceptor'
import { EnumOrderStatus, IOrder } from '@/app/types/order.interface'
import { ICartItem } from '../types/cart.interface'

type TypeData = {
    status?: EnumOrderStatus
    items: {
        price: number
        quantity: number
        productId: number
    }[]
}

export const OrderService = {
    async getAll() {
        return instanse<IOrder[]>({
            url: '/orders',
            method: 'GET'
        })
    },

    async place(data: TypeData) {
        return instanse<{ confirmation: { confirmation_url: string } }>({
            url: '/orders',
            method: 'POST',
            data
        })
    }
}
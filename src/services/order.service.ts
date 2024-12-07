import { instanse } from '@/src/api/api.interceptor'
import { EnumOrderStatus, IOrder } from '@/src/types/order.interface'
import { ICartItem } from '@/src/types/cart.interface'

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
            url: '/orders/by-user',
            method: 'GET'
        })
    },

    async getByUser() {
        return instanse<IOrder[]>({
            url: '/orders/by-user',
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
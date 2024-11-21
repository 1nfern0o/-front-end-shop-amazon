import { ICartItem } from "./cart.interface"
import { IProduct } from "./product.interface"
import { IUser } from "./user.interface"

export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export interface IOrder {
    id: number
    createdAt: string
    updatedAt: string
    status: EnumOrderStatus
    userId: number
    user: IUser
    items: ICartItem[]
    total: number
}

export interface IOrderItem {
    id: number
    createdAt: string
    updatedAt: string
    quantity: number
    price: number
    orderId?: number
    productId: number
    order?: IOrder
    product: IProduct
}
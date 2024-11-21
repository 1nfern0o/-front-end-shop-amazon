import { instanse } from '@/app/api/api.interceptor'
import { IPaymentResponce } from '@/app/types/payment.interface'

export const PaymentService = {
    async createPayment(amount: number) {
        return instanse.post<IPaymentResponce>(
            '/payment', { amount }
        )
    }
}
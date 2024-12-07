import { instanse } from '@/src/api/api.interceptor'
import { IPaymentResponce } from '@/src/types/payment.interface'

export const PaymentService = {
    async createPayment(amount: number) {
        return instanse.post<IPaymentResponce>(
            '/payment', { amount }
        )
    }
}
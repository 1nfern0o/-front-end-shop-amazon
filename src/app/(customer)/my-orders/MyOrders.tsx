'use client'

import Catalog from "@/src/components/ui/catalog/Catalog"
import Heading from "@/src/components/ui/Heading"
import Layout from "@/src/components/ui/layout/Layout"
import { useProfile } from "@/src/hooks/useProfile"
import { OrderService } from "@/src/services/order.service"
import { convertPrice } from "@/src/utils/convertPrice"
import { useQuery } from "@tanstack/react-query"

interface Props {}

export function MyOrders({}: Props) {
    const { data: orders } = useQuery({
        queryKey: ['my orders'],
        queryFn: () => OrderService.getByUser(),
        select: ({ data }) => data
      })

    return (
        <Layout>
            <Heading>My orders</Heading>

            <section>
            {orders?.length ? orders.map(order => (
                <div key={`my-order-item-${order.id}`} className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'>
                <span>#{order.id}</span>
                <span>{order.status}</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                <span>{convertPrice(order.total)}</span>
                </div>
            )) : <div>Order not found!</div>}
            </section>
        </Layout>
    )
}

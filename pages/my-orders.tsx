import Heading from '@/app/components/ui/Heading'
import Layout from '@/app/components/ui/layout/Layout'
import Meta from '@/app/components/ui/Meta'
import { NextPageAuth } from '@/app/providers/auth-provider/auth-page.types'
import { OrderService } from '@/app/services/order.service'
import { convertPrice } from '@/app/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'

const MyOrdersPage: NextPageAuth = () => {
  const { data: orders } = useQuery({
    queryKey: ['my orders'],
    queryFn: () => OrderService.getAll(),
    select: ({ data }) => data
  })

  return (
    <Meta title="My Orders">
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
    </Meta>
  )
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage

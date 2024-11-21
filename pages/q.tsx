import Home from '@/app/components/screens/home/Home'
import Catalog from '@/app/components/ui/catalog/Catalog'
import Layout from '@/app/components/ui/layout/Layout'
import Meta from '@/app/components/ui/Meta'
import { useProfile } from '@/app/hooks/useProfile'
import { NextPageAuth } from '@/app/providers/auth-provider/auth-page.types'
import { ProductService } from '@/app/services/product/product.service'
import { TypePaginationProducts } from '@/app/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const SearchPage: NextPageAuth = () => {
  const { query } = useRouter()
  
  const { data } = useQuery({
    queryKey: ['search products', query.term],
    queryFn: () => ProductService.getAll({
      searchTerm: query.term as string
    })
  })

  return (
    <Meta title="Поиск">
      <Layout>
        <Catalog products={data?.products || []} title={`Поиск по запросу "${query.term || ''}"`} />
      </Layout>
    </Meta>
  )
}

export default SearchPage

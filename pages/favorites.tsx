import Home from '@/app/components/screens/home/Home'
import Catalog from '@/app/components/ui/catalog/Catalog'
import Layout from '@/app/components/ui/layout/Layout'
import Meta from '@/app/components/ui/Meta'
import { useProfile } from '@/app/hooks/useProfile'
import { NextPageAuth } from '@/app/providers/auth-provider/auth-page.types'
import { ProductService } from '@/app/services/product/product.service'
import { TypePaginationProducts } from '@/app/types/product.interface'
import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'

const FavoritesPage: NextPageAuth = () => {
  const { profile } = useProfile()


  return (
    <Meta title="Favorites">
      <Layout>
        <Catalog products={profile?.favorites || []} title="Favorites" />
      </Layout>
    </Meta>
  )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage

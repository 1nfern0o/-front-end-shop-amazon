import Home from '@/app/components/screens/home/Home'
import Catalog from '@/app/components/ui/catalog/Catalog'
import Layout from '@/app/components/ui/layout/Layout'
import Meta from '@/app/components/ui/Meta'
import { useProfile } from '@/app/hooks/useProfile'
import { NextPageAuth } from '@/app/providers/auth-provider/auth-page.types'
import { CategoryService } from '@/app/services/category.service'
import { ProductService } from '@/app/services/product/product.service'
import { ICategory } from '@/app/types/category.interface'
import { IProduct, TypePaginationProducts } from '@/app/types/product.interface'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Inter } from 'next/font/google'

const CategoryPage: NextPage<{ products: IProduct[], category: ICategory }> = ({ products, category }) => {
  return (
    <Meta title={category.name}>
      <Layout>
        <Catalog products={products || []} title={category.name} />
      </Layout>
    </Meta>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: { slug: category.slug }
        }
    })

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data: products } = await ProductService.getByCategory(params?.slug as string)

    const { data: category } = await CategoryService.getBySlug(params?.slug as string)
  
    return {
      props: {
        products,
        category
      }
    }
}

export default CategoryPage

import Home from '@/app/components/screens/home/Home'
import { ProductService } from '@/app/services/product/product.service'
import { TypePaginationProducts } from '@/app/types/product.interface'
import { GetStaticProps, NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage<TypePaginationProducts> = ({ length, products }) => {
  return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 4
  })

  return {
    props: data
  }
} 

export default HomePage

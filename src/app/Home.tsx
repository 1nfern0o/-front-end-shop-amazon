'use client'

import { FC } from "react"
import CatalogPagination from "@/src/components/ui/catalog/CatalogPagination"
import { TypePaginationProducts } from "@/src/types/product.interface"
import Layout from "@/src/components/ui/layout/Layout"

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
    return (
        <Layout>
            <CatalogPagination title="Freshed products" data={{ products, length }} />
        </Layout>
    )
}

export default Home

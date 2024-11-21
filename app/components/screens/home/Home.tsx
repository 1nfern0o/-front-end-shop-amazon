import { FC } from "react"
import Meta from "../../ui/Meta"
import CatalogPagination from "../../ui/catalog/CatalogPagination"
import { TypePaginationProducts } from "@/app/types/product.interface"
import Layout from "../../ui/layout/Layout"

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
    return (
        <Meta title="Home">
            <Layout>
                <CatalogPagination title="Freshed products" data={{ products, length }} />
            </Layout>
        </Meta>
    )
}

export default Home

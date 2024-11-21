import { IProduct, TypePaginationProducts } from "@/app/types/product.interface"
import { FC, useState } from "react"
import ProductItem from "./product-item/ProductItem";
import Loader from "../Loader";
import Heading from "../Heading";
import Button from "../button/Button";
import SortDropdown from "./SortDropdown";
import { EnumProductSort, TypeProductData } from "@/app/services/product/product.types";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/app/services/product/product.service";

interface ICatalogPagination {
    data: TypePaginationProducts
    title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
    const [page, setPage] = useState<number>(1)

    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const { data: response, isLoading} = useQuery({
        queryKey: ['products', sortType, page],
        queryFn: () => ProductService.getAll({
            page,
            perPage: 4,
            sort: sortType
        }),
        initialData: data
    })

    if (isLoading) return <Loader />

    return (
        <section>
            {title && <Heading className="mb-5">{title}</Heading>}

            <SortDropdown sortType={sortType} setSortType={setSortType} />

            {response?.products?.length
                ? (
                    <>
                        <div className="grid grid-cols-4 gap-10">
                            {response?.products?.map(product => <ProductItem key={`catalog-pagination-product-${product.id}`} product={product}/>)}
                        </div>
                        <div className="text-center mt-16">
                            {Array.from({ length: response.length / 4 }).map((_, index) => {
                                const pageNumber = index + 1
                                return (
                                    <Button
                                        key={`catalog-pagination-item-${pageNumber}`}
                                        size="sm"
                                        variant={page === pageNumber ? 'orange' : 'white'}
                                        onClick={() => setPage(pageNumber)}
                                        className="mx-3"
                                    >
                                        {pageNumber}
                                    </Button>
                                )
                            })}
                        </div>
                    </>
                )
                : <div>There are no products</div>
            }
        </section>
    )
}

export default CatalogPagination

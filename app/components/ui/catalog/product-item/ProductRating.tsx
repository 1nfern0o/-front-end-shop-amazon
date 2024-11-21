import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { useActions } from "@/app/hooks/useActions"
import { useCart } from "@/app/hooks/useCart"
import { IProduct, IProductDetails } from "@/app/types/product.interface"
import { FC, useState } from "react"
import { IReview } from "@/app/types/review.interface";
import { useQuery } from "@tanstack/react-query";
import { ReviewService } from "@/app/services/review.service";
import { Rating } from "react-simple-star-rating";

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
    const [rating, setRating] = useState(
        Math.round(
            product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
        ) || 0
    )
    // const { data: rating = 0 } = useQuery({
    //     queryKey: ['get product rating', product.id],
    //     queryFn: () => ReviewService.getAverageByProduct(product.id),
    //     select: ({ data }) => data
    // })

    return (
        <div className="mb-2">
            {!!product.reviews.length && (
                <span className="mr-1">
                    <Rating
                        readonly
                        initialValue={rating}
                        SVGstyle={{
                            display: 'inline-block'
                        }}
                        size={20}
                        allowFraction
                        transition
                    />
                    <span
                        style={{ color: '#FFBC0D' }}
                        className="text-sm ml-1"
                    >
                        {rating}
                    </span>
                </span>
            )}

            <span className="text-xs">({product.reviews.length} reviews)</span>
        </div>
    )
}

export default ProductRating

import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { useActions } from "@/app/hooks/useActions"
import { useCart } from "@/app/hooks/useCart"
import { IProduct } from "@/app/types/product.interface"
import { FC } from "react"

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
    const { addToCart, removeFromCart } = useActions()
    const { items } = useCart()

    const currentElement = items.find(cartItem => cartItem.product.id === product.id)
    return (
        <div>
            <button
                className="text-secondary"
                onClick={() => currentElement
                    ? removeFromCart({ id: currentElement.id })
                    : addToCart({
                        product,
                        quantity: 1,
                        price: product.price
                    })
                }
            >
                {currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
            </button>
        </div>
    )
}

export default AddToCartButton

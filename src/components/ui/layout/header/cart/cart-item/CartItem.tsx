import { FC } from "react"
import { convertPrice } from "@/src/utils/convertPrice"
import { ICartItem } from "@/src/types/cart.interface"
import Image from "next/image"
import CartActions from "./cart-actions/CartActions"

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
    return (
        // <div className={styles.item}>
        <div>
            <Image
                src={item.product.images[0]}
                width={100}
                height={100}
                alt={item.product.name}
            />
            <div>
                {/* <div className={styles.name}> */}
                <div>
                    {item.product.name}
                </div>
                {/* <div className={styles.price}> */}
                <div>
                    {convertPrice(item.product.price)}
                </div>

                <CartActions item={item} />
            </div>
        </div>
    )
}

export default CartItem

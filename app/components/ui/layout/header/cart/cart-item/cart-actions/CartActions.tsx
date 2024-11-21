
import { FiTrash } from "react-icons/fi";
import { FC } from "react"
import { ICartItem } from "@/app/types/cart.interface"
import { useCart } from "@/app/hooks/useCart"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { useActions } from "@/app/hooks/useActions";

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
    const { removeFromCart, changeQuantity } = useActions()
    const { items } = useCart()
    const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

    return (
        <div className="mt-3">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
                    disabled={quantity === 1}
                >
                    <AiFillMinusCircle fontSize={13} />
                </button>

                <input
                    disabled
                    readOnly
                    value={quantity}
                    type="text"
                    className="w-10 bg-black text-center"
                />

                <button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
                    <AiFillPlusCircle fontSize={13} />
                </button>

                <button
                    onClick={() => removeFromCart({ id: item.id })}
                    className="ml-3 text-dark-primary"
                >
                    <FiTrash fontSize={13} />
                </button>
            </div>
        </div>
    )
}

export default CartActions

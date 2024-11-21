
import { useCart } from "@/app/hooks/useCart"
import { useOutside } from "@/app/hooks/useOutside"
import { useRouter } from "next/router"
import { FC } from "react"
import { RiShoppingCartLine } from "react-icons/ri"
import cn from "clsx"
import SquareButton from "../../../button/SquareButton"
import { convertPrice } from "@/app/utils/convertPrice"
import Button from "../../../button/Button"
import CartItem from "./cart-item/CartItem"
import { useMutation } from "@tanstack/react-query"
import { PaymentService } from "@/app/services/payment.service"
import { OrderService } from "@/app/services/order.service"
import { useActions } from "@/app/hooks/useActions"

const Cart: FC = () => {
    const { isShow, setIsShow, ref } = useOutside(false)

    const { items, total } = useCart()

    const { reset } = useActions()

    const { push } = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['create order and payment'],
        mutationFn: () => OrderService.place({
            items: items.map(item => ({
                price: item.price,
                quantity: item.quantity,
                productId: item.product.id
            }))
        }),
        onSuccess: ({ data }) => {
            push(data.confirmation.confirmation_url).then(() => reset())
        }
    })

    return (
        <div className="relative" ref={ref}>
            <SquareButton
                Icon={RiShoppingCartLine}
                onClick={() => {
                    setIsShow(!isShow)
                }}
                number={items.length}
            />

            <div
                className={cn('absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white', isShow ? 'open-menu' : 'close-menu')}
            >
                <div className="font-normal text-lg mb-5">My cart</div>

                {/* <div className={styles.cart}> */}
                <div>
                    {items.length
                        ? (
                            items.map(item => <CartItem item={item} key={`header-cart-item-${item.id}`} />)
                        )
                        : <div className="font-light">Cart is empty!</div>}
                </div>

                {/* <div className={styles.footer}> */}
                <div>
                    <div>Total:</div>
                    <div>{convertPrice(total)}</div>
                </div>
                <div className="text-center">
                    <Button variant="white" size="sm" className="btn-link mt-5 mb-2" onClick={() => mutate()}>
                        Place order
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart

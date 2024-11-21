import { cartSlice } from './cart/cart.slice'
import * as userActions from './user/user.actions'

export const rooActions = {
    ...userActions,
    ...cartSlice.actions
}
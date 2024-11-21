import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import { carouselSlice } from './carousel/carousel.slice'
import { cartSlice } from './cart/cart.slice'
import { userSlice } from './user/user.slice'

const persistConfig = {
    key: 'amazon-v2',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    // carousel: carouselSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer
})

const persistedReudcer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReudcer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>

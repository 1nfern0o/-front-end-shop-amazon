import { createSlice } from "@reduxjs/toolkit"
import { IInitialState } from "./user.interface"
import { register, login, checkAuth } from "./user.actions"
import { getStoreLocal } from "@/app/utils/local-storage"

const initialState: IInitialState = {
    user: getStoreLocal('user'),
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            state.isLoading = true
        }),
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        }),
        builder.addCase(register.rejected, state => {
            state.isLoading = false
            state.user = null
        }),
        builder.addCase(login.pending, state => {
            state.isLoading = true
        }),
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        }),
        builder.addCase(login.rejected, state => {
            state.isLoading = false
            state.user = null
        }),
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
    }
})

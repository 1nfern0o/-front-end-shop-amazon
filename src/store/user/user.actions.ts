import { createAsyncThunk } from "@reduxjs/toolkit";

import { errorCatch } from "@/src/api/api.helper";

import { IAuthResponse, IEmailPassword } from "./user.interface";
import { removeFromStorage } from "@/src/services/auth/auth.helper";
import { AuthService } from "@/src/services/auth/auth.service";

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('register', data)
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('login', data)
            if (response)
            
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

// logout
export const logout = createAsyncThunk(
    'auth/logout',
    async () => { removeFromStorage() }
)

// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async (_, thunkApi) => {
        try {
            const response = await AuthService.getNewTokens()
            return response.data
        } catch (error) {
            if (errorCatch(error) === 'jwt expired') {
                thunkApi.dispatch(logout())
            }
            
            return thunkApi.rejectWithValue(error)
        }
    }
)

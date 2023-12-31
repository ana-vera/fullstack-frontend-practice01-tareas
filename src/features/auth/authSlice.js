import {createSlice, createAsyncThunk }from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Registrar un nuevo usuario
export const register = createAsyncThunk('auth/register',async(user, thunkAPI)=>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) 
        ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Login user
export const login = createAsyncThunk('auth/login',async(user, thunkAPI)=>{
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) 
        ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Usuario logout
export const logout = createAsyncThunk('auth/logout', async()=>{
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer
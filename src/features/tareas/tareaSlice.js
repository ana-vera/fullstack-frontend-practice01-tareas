import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    tareas: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createTarea = createAsyncThunk('tareas/create', async (tareaData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState()
        return await tareaService.createTarea(tareaData)
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) 
        ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//ver las tareas del usuario logeado
export const getTareas = createAsyncThunk('tareas/get', async(_, thunkAPI)=>{
    try {
        
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) 
        ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )

//Borrar nueva
export const createTarea = createAsyncThunk('tareas/delete', async (tareaData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.createTarea(tareaData, token)
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) 
        ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const tareaSlice = createSlice({
    name: 'tarea',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder
        .addCase(createTarea.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createTarea.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.tareas.push(action.payload)
        })
        .addCase(createTarea.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
    }
    
    
})

export const {reset} = tareaSlice.actions

export default tareaSlice.reducer
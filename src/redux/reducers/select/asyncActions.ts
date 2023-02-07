import { createAsyncThunk } from '@reduxjs/toolkit'
import { IPizza } from '@utils/types/types'

export const fetchPizzas = createAsyncThunk<IPizza[], undefined>('selectPage/fetchPizzas', async (_, {}) => {
    const response = await fetch('https://shift-winter-2023-backend.onrender.com/api/pizza')
    return response.json()
})

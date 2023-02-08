import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPizzas } from '@utils/api/pizzaApi'
import { IPizza } from '@utils/types/types'

export const fetchPizzasThunk = createAsyncThunk<IPizza[], undefined, { rejectValue: string }>(
    'selectPage/fetchPizzas',
    async (_, { rejectWithValue }) =>
        await fetchPizzas()
            .then((response) => response.data)
            .catch((err) => rejectWithValue(`Server Error${err}`))
)

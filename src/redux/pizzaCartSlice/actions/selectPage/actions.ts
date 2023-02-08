import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzas } from '@utils/api/pizzaApi'
import { checkPizzaInCart } from '@utils/helpers/functions'
import { IPizza } from '@utils/types/types'

export const addOrRemovePizza = (state, action: PayloadAction<number>) => {
    if (checkPizzaInCart(state.selectedPizzaList, action.payload)) {
        state.selectedPizzaList = state.selectedPizzaList.filter((id: number) => id !== action.payload)
        return
    }

    state.selectedPizzaList.push(action.payload)
}

export const fetchPizzasThunk = createAsyncThunk<IPizza[], undefined, { rejectValue: string }>(
    'selectPage/fetchPizzas',
    async (_, { rejectWithValue }) =>
        await fetchPizzas()
            .then((response) => response.data)
            .catch((err) => rejectWithValue(`Server Error${err}`))
)

import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzas } from '@utils/api/pizzaApi'
import { checkPizzaInCart } from '@utils/helpers/functions'
import { IPizza, ISelectedPizza } from '@utils/types/types'

export const addOrRemovePizza = (state, action: PayloadAction<IPizza>) => {
    if (checkPizzaInCart(state.selectedPizzaList, action.payload)) {
        state.selectedPizzaList = state.selectedPizzaList.filter(
            (card: ISelectedPizza) => card.pizza.id !== action.payload.id
        )
        return
    }

    const defaultPrice = action.payload.price.default

    state.selectedPizzaList.push({ pizza: action.payload, quantity: 1, price: defaultPrice, crust: '', size: 'small' })
}

export const fetchPizzasThunk = createAsyncThunk<IPizza[], undefined, { rejectValue: string }>(
    'selectPage/fetchPizzas',
    async (_, { rejectWithValue }) =>
        await fetchPizzas()
            .then((response) => response.data)
            .catch((err) => rejectWithValue(`Server Error ${err}`))
)

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { statusType } from '@utils/types/types'
import { fetchPizzasThunk } from './asyncActions'
import { ISelectPizzaState } from './types'

const initialState: ISelectPizzaState = {
    pizzas: [],
    categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
    currentCategory: 'Рекомендуем',
    status: statusType.toFetch,
    selectedPizzas: []
}

export const selectPizzaSlice = createSlice({
    name: 'selectPage',
    initialState,
    reducers: {
        togglePizza: (state, action: PayloadAction<number>) => {
            if (state.selectedPizzas.includes(action.payload)) {
                state.selectedPizzas = state.selectedPizzas.filter((id: number) => id !== action.payload)
                return
            }

            state.selectedPizzas.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPizzasThunk.pending, (state) => {
                state.status = statusType.loading
            })
            .addCase(fetchPizzasThunk.fulfilled, (state, action) => {
                state.status = statusType.ok
                state.pizzas = action.payload
            })
            .addCase(fetchPizzasThunk.rejected, (state) => {
                state.status = statusType.error
            })
    }
})

export const { togglePizza } = selectPizzaSlice.actions

export default selectPizzaSlice.reducer

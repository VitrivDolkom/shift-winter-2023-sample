import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { statusType } from '@utils/types/types'
import { fetchPizzas } from './asyncActions'
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
            .addCase(fetchPizzas.pending, (state, action) => {
                state.status = statusType.loading
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = statusType.ok
                state.pizzas = action.payload
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.status = statusType.error
            })
    }
})

export const { togglePizza } = selectPizzaSlice.actions

export default selectPizzaSlice.reducer

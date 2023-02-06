import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '@utils/types/types'
import { ISelectPizzaState } from './types'

const initialState: ISelectPizzaState = {
    pizzas: [],
    categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
    currentCategory: 'Рекомендуем',
    pizzasLoaded: false,
    selectedPizzas: []
}

export const selectPizzaSlice = createSlice({
    name: 'selectPage',
    initialState,
    reducers: {
        fetchPizzas: (state, action: PayloadAction<IPizza[]>) => {
            state.pizzas = action.payload
        },

        setPizzasLoaded: (state) => {
            state.pizzasLoaded = true
        },

        togglePizza: (state, action: PayloadAction<number>) => {
            if (state.selectedPizzas.includes(action.payload)) {
                state.selectedPizzas = state.selectedPizzas.filter((id: number) => id !== action.payload)
            }

            state.selectedPizzas.push(action.payload)
        }
    }
})

export default selectPizzaSlice.reducer

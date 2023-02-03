import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '@utils/mainTypes/types'
import { ISelectPageState } from './types'

const initialState: ISelectPageState = {
    pizzas: [],
    categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
    currentCategory: 'Рекомендуем',
    pizzasLoaded: false,
    selectedPizzas: []
}

export const selectPageSlice = createSlice({
    name: 'selectPage',
    initialState,
    reducers: {
        fetchPizzas: (state, action: PayloadAction<IPizza[]>) => {
            return {
                ...state,
                pizzas: action.payload
            }
        },
        setPizzasLoaded: (state) => {
            return {
                ...state,
                pizzasLoaded: true
            }
        },
        togglePizza: (state, action: PayloadAction<number>) => {
            if (state.selectedPizzas.includes(action.payload)) {
                state.selectedPizzas = state.selectedPizzas.filter((id) => id !== action.payload)
            }

            state.selectedPizzas.push(action.payload)
        }
    }
})

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '@utils/types/types'
import { ISelectPageState } from './types'
import { RootState } from '@redux/store'

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
        fetchPizzas: (state: RootState, action: PayloadAction<IPizza[]>) => {
            state.pizzas = action.payload
        },
        setPizzasLoaded: (state: RootState) => {
            state.pizzasLoaded = true
        },
        togglePizza: (state: RootState, action: PayloadAction<number>) => {
            if (state.selectedPizzas.includes(action.payload)) {
                state.selectedPizzas = state.selectedPizzas.filter((id: number) => id !== action.payload)
            }

            state.selectedPizzas.push(action.payload)
        }
    }
})

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calculatePizzaPrice } from '@utils/helpers/functions'
import { IPizza } from '@utils/types/types'
import { IOrderPizzaState } from './types'

const initialState: IOrderPizzaState = {
    orderedPizzas: [],
    successOrder: false
}

export const orderPizzaSlice = createSlice({
    name: 'orderPage',
    initialState,
    reducers: {
        setPizza(state, action: PayloadAction<IPizza>) {
            const pizzaPrice = action.payload.price.default

            state.orderedPizzas.push({
                pizza: action.payload,
                quantity: 1,
                crust: '',
                size: 'small',
                price: pizzaPrice
            })
        },

        increasePizzaQuantity(state, action: PayloadAction<number>) {
            state.orderedPizzas.forEach((card) => {
                if (card.id === action.payload) card.quantity++
            })
        },

        decreasePizzaQuantity(state, action: PayloadAction<number>) {
            state.orderedPizzas.forEach((card) => {
                if (card.id === action.payload) card.quantity--
            })
        },

        removePizza(state, action: PayloadAction<number>) {
            state.orderedPizzas.filter((card) => card.pizza.id !== action.payload)
        },

        setPizzaSize(state, action: PayloadAction<{ id: number; crust: string }>) {
            state.orderedPizzas.forEach((card) => {
                if (card.id === action.payload.id) {
                    card.price = calculatePizzaPrice(card)
                    card.crust = card.crust === action.payload.crust ? '' : action.payload.crust
                }
            })
        },

        setPizzaCrust(state, action: PayloadAction<{ id: number; size: string }>) {
            state.orderedPizzas.forEach((card) => {
                if (card.id === action.payload.id) {
                    card.price = calculatePizzaPrice(card)
                    card.size = action.payload.size
                }
            })
        }
    }
})

export const { setPizza, increasePizzaQuantity, decreasePizzaQuantity, removePizza, setPizzaSize, setPizzaCrust } =
    orderPizzaSlice.actions

export default orderPizzaSlice.reducer

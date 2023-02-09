import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createOrderRequest } from '@utils/api/pizzaApi'
import { calculatePizzaPrice } from '@utils/helpers/functions'
import { ISelectedPizza } from '@utils/types/types'
import { IOrder } from '@redux/pizzaCartSlice/types'

export const addAnotherPizza = (state, action: PayloadAction<number>) => {
    state.selectedPizzaList.forEach((card: ISelectedPizza) => {
        if (card.pizza.id === action.payload) {
            card.quantity++
            card.price = calculatePizzaPrice(card)
        }
    })
}

export const removeOnePizza = (state, action: PayloadAction<number>) => {
    state.selectedPizzaList.forEach((card: ISelectedPizza) => {
        if (card.pizza.id === action.payload && card.quantity > 1) {
            card.quantity--
            card.price = calculatePizzaPrice(card)
        }
    })
}

export const changePizzaSize = (state, action: PayloadAction<{ id: number; size: string }>) => {
    state.selectedPizzaList.forEach((card) => {
        if (card.pizza.id === action.payload.id) {
            card.size = action.payload.size
            card.price = calculatePizzaPrice(card)
        }
    })
}

export const changePizzaCrust = (state, action: PayloadAction<{ id: number; crust: string }>) => {
    state.selectedPizzaList.forEach((card: ISelectedPizza) => {
        if (card.pizza.id === action.payload.id) {
            card.crust = card.crust === action.payload.crust ? '' : action.payload.crust
            card.price = calculatePizzaPrice(card)
        }
    })
}

export const createOrderThunk = createAsyncThunk<Promise<void>, IOrder, { rejectValue: string }>(
    'orderPage/createOrder',
    async (order, { rejectWithValue }) => {
        await createOrderRequest(order)
            .then((response) => response.data)
            .catch((error) => rejectWithValue(`Server error ${error}`))
    }
)

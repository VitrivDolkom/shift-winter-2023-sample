import { PayloadAction } from '@reduxjs/toolkit'
import { calculatePizzaPrice } from '@utils/helpers/functions'
import { IPizza } from '@utils/types/types'

export const addPizzaToArray = (state, action: PayloadAction<IPizza>) => {
    const pizzaPrice = action.payload.price.default

    state.orderedPizzas.push({
        pizza: action.payload,
        quantity: 1,
        crust: '',
        size: 'small',
        price: pizzaPrice
    })
}

export const addAnotherPizza = (state, action: PayloadAction<number>) => {
    state.orderedPizzas.forEach((card) => {
        if (card.id === action.payload) card.quantity++
    })
}

export const removeOnePizza = (state, action: PayloadAction<number>) => {
    state.orderedPizzas.forEach((card) => {
        if (card.id === action.payload) card.quantity--
    })
}

export const deletePizzaById = (state, action: PayloadAction<number>) => {
    state.orderedPizzas.filter((card) => card.pizza.id !== action.payload)
}

export const changePizzaSize = (state, action: PayloadAction<{ id: number; size: string }>) => {
    state.orderedPizzas.forEach((card) => {
        if (card.id === action.payload.id) {
            card.price = calculatePizzaPrice(card)
            card.size = action.payload.size
        }
    })
}

export const changePizzaCrust = (state, action: PayloadAction<{ id: number; crust: string }>) => {
    state.orderedPizzas.forEach((card) => {
        if (card.id === action.payload.id) {
            card.price = calculatePizzaPrice(card)
            card.crust = card.crust === action.payload.crust ? '' : action.payload.crust
        }
    })
}

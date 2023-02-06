import { IAction } from '@utils/types/types'
import { SET_SINGLE_PIZZA } from '../select/actionTypes'
import {
    DECREASE_PIZZA_QUANTITY,
    INCREASE_PIZZA_QUANTITY,
    REMOVE_PIZZA_ORDER,
    SET_PIZZA_CRUST,
    SET_PIZZA_SIZE,
    SUCCESS_ORDER
} from './actionTypes'
import { IOrderPageState } from './types'

const initialState: IOrderPageState = {
    orderedPizzas: [],
    success: false
}

const orderReducer = (state = initialState, action: IAction): IOrderPageState => {
    switch (action.type) {
        case SET_SINGLE_PIZZA:
            const pizzaPrice: number = action.payload?.price.default
            let duplicate = false

            state.orderedPizzas.forEach((order) => {
                if (order.pizza.id === action.payload.id) {
                    duplicate = true
                }
            })

            if (duplicate) {
                return state
            }

            return {
                ...state,
                orderedPizzas: [
                    ...state.orderedPizzas,
                    { pizza: action.payload, quantity: 1, price: pizzaPrice, crust: '', size: 'small' }
                ]
            }

        case INCREASE_PIZZA_QUANTITY:
            const increasedOrder = state.orderedPizzas.map((card) => {
                if (card.pizza.id === action.payload) {
                    return {
                        ...card,
                        quantity: card.quantity + 1,
                        price: (card.price / card.quantity) * (card.quantity + 1)
                    }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: increasedOrder
            }

        case DECREASE_PIZZA_QUANTITY:
            const decreasedOrder = state.orderedPizzas.map((card) => {
                if (card.pizza.id === action.payload && card.quantity > 1) {
                    return {
                        ...card,
                        quantity: card.quantity - 1,
                        price: (card.price / card.quantity) * (card.quantity - 1)
                    }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: decreasedOrder
            }

        case REMOVE_PIZZA_ORDER:
            return {
                ...state,
                orderedPizzas: state.orderedPizzas.filter((card) => card.pizza.id !== action.payload)
            }

        case SET_PIZZA_CRUST:
            const settedCrust = state.orderedPizzas.map((card) => {
                let newPrice: number =
                    (card.pizza.price.default +
                        card.pizza.price.crust[action.payload.crust] +
                        card.pizza.price.size[card.size]) *
                    card.quantity

                if (card.crust === action.payload.crust) {
                    newPrice = (card.pizza.price.default + card.pizza.price.size[card.size]) * card.quantity
                    return {
                        ...card,
                        crust: '',
                        price: newPrice
                    }
                }
                if (card.pizza.id === action.payload.id) {
                    return { ...card, crust: action.payload.crust, price: newPrice }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: settedCrust
            }

        case SET_PIZZA_SIZE:
            const settedSize = state.orderedPizzas.map((card) => {
                const newPrice =
                    (card.pizza.price.default +
                        (card.pizza.price.crust[card.crust] || 0) +
                        card.pizza.price.size[action.payload.size]) *
                    card.quantity

                if (card.pizza.id === action.payload.id) {
                    return { ...card, size: action.payload.size, price: newPrice }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: settedSize
            }

        case SUCCESS_ORDER:
            return {
                ...state,
                success: true
            }

        default:
            return state
    }
}

export default orderReducer

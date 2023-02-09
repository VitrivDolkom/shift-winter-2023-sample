import { createSlice } from '@reduxjs/toolkit'
import { statusType } from '@utils/types/types'
import {
    addAnotherPizza,
    changePizzaCrust,
    changePizzaSize,
    createOrderThunk,
    removeOnePizza
} from './actions/orderPage/actions'
import { addOrRemovePizza, fetchPizzasThunk } from './actions/selectPage/actions'
import { IPizzaCartState } from './types'

const initialState: IPizzaCartState = {
    pizzaList: [],
    categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
    currentCategory: 'Рекомендуем',
    status: statusType.toFetch,
    selectedPizzaList: [],
    successOrder: false
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        togglePizza: addOrRemovePizza,
        increasePizzaQuantity: addAnotherPizza,
        decreasePizzaQuantity: removeOnePizza,
        setPizzaSize: changePizzaSize,
        setPizzaCrust: changePizzaCrust
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPizzasThunk.pending, (state) => {
                state.status = statusType.loading
            })
            .addCase(fetchPizzasThunk.fulfilled, (state, action) => {
                state.status = statusType.ok
                state.pizzaList = action.payload
            })
            .addCase(fetchPizzasThunk.rejected, (state) => {
                state.status = statusType.error
            })
            .addCase(createOrderThunk.fulfilled, (state) => {
                state.successOrder = true
            })
    }
})

export const { togglePizza, increasePizzaQuantity, decreasePizzaQuantity, setPizzaSize, setPizzaCrust } =
    cartSlice.actions

export default cartSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import selectPizzaReducer from './reducers//select/selectPizzaSlice'
import orderPizzaReducer from './reducers//select/selectPizzaSlice'

export const store = configureStore({
    reducer: {
        selectPage: selectPizzaReducer,
        orderPage: orderPizzaReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

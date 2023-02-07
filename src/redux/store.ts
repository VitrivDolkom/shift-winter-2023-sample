import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import selectPizzaReducer from './reducers//select/selectPizzaSlice'
import orderPizzaReducer from './reducers//select/selectPizzaSlice'

export const store = configureStore({
    reducer: {
        selectPage: selectPizzaReducer,
        orderPage: orderPizzaReducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

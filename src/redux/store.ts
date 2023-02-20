import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import pizzaCartReducer from './pizzaCartSlice/pizzaCartSlice'

export const store = configureStore({
    reducer: {
        pizzaCart: pizzaCartReducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

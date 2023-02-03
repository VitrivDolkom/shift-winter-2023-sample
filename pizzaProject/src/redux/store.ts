import { configureStore } from '@reduxjs/toolkit'
import { selectPageSlice } from './reducers/select/selectPageSlice'

export const store = configureStore({
    reducer: {
        selectPage: selectPageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

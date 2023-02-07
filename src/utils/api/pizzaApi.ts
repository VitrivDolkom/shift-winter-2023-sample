import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPizza } from '@utils/types/types'

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shift-winter-2023-backend.onrender.com/api.pizza' }),
    endpoints: (builder) => ({
        getPizzas: builder.query<IPizza[], string>({
            query: () => '/'
        })
    })
})

export const { useGetPizzasQuery } = pizzaApi

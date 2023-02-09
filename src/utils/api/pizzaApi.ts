import { IOrder, IPizza } from '@utils/types/types'
import axios from 'axios'

const BASE_URL = 'https://shift-winter-2023-backend.onrender.com/api/pizza'

export const pizzaIstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})

export const fetchPizzas = async () => await pizzaIstance.get<IPizza[]>('/')
export const createOrderRequest = async (order: IOrder) => await pizzaIstance.post('/createOrder', order)

import { IPizza } from '@utils/types/types'
import { pizzaIstance } from './pizzaApi'
import { IOrder } from '@redux/pizzaCartSlice/types'

export const fetchPizzas = async () => await pizzaIstance.get<IPizza[]>('/')

export const createOrderRequest = async (order: IOrder) => await pizzaIstance.post('/createOrder', order)

export const fetchPizzasByCategory = async () => await pizzaIstance.get<IPizza[]>('/new')

// fetchPizzasByCategory()

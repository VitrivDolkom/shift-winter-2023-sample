import { instance } from '@utils/api/axios'
import { IPizza } from '@utils/types/types'
import { AxiosResponse } from 'axios'
import { GET_PIZZAS, SET_PIZZA_LOADED, SET_SINGLE_PIZZA, TOGGLE_PIZZA } from './actionTypes'
import { DispatchType } from '@redux/store'

export const setPizzas = (pizzas: IPizza[]) => ({
    type: GET_PIZZAS,
    payload: pizzas
})

export const setLoaded = () => ({
    type: SET_PIZZA_LOADED
})

export const getPizzas = () => {
    return async (dispatch: DispatchType) => {
        const result = await instance.get<string, AxiosResponse<IPizza[]>>('')

        dispatch(setPizzas(result.data))
        setTimeout(() => {
            dispatch(setLoaded())
        }, 500)
    }
}

export const togglePizza = (id: number) => ({
    type: TOGGLE_PIZZA,
    payload: id
})

export const setSinglePizza = (pizza: IPizza) => ({
    type: SET_SINGLE_PIZZA,
    payload: pizza
})

export const getSinglePizza = (id: number) => {
    return async (dispatch: DispatchType) => {
        const result = await instance.get<string, AxiosResponse<IPizza>>(`${id}`)

        dispatch(setSinglePizza(result.data))
    }
}

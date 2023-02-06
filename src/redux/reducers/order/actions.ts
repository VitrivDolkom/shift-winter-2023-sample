import { IOrderFormValues } from '@pages/order/OrderForm/types'
import { instance } from '@utils/api/axios'
import { IPizzaOrder } from '@utils/types/types'
import { AxiosResponse } from 'axios'
import {
    DECREASE_PIZZA_QUANTITY,
    INCREASE_PIZZA_QUANTITY,
    REMOVE_PIZZA_ORDER,
    SET_PIZZA_CRUST,
    SET_PIZZA_SIZE,
    SUCCESS_ORDER
} from './actionTypes'
import { IBackPizzaOrder, IOrderForm } from './types'
import { DispatchType } from '@redux/store'

export const increasePizzaQuantity = (id: number) => ({
    type: INCREASE_PIZZA_QUANTITY,

    payload: id
})

export const decreasePizzaQuantity = (id: number) => ({
    type: DECREASE_PIZZA_QUANTITY,
    payload: id
})

export const setPizzaCrust = (id: number, crust: string) => ({
    type: SET_PIZZA_CRUST,
    payload: { id, crust }
})

export const setPizzaSize = (id: number, size: string) => ({
    type: SET_PIZZA_SIZE,
    payload: { id, size }
})

export const removePizzaOrder = (id: number) => ({
    type: REMOVE_PIZZA_ORDER,
    payload: id
})

export const successOrder = () => ({
    type: SUCCESS_ORDER
})

export const sendPizzaOrder = (formValues: IOrderFormValues, pizzas: IPizzaOrder[]) => {
    const formData: IOrderForm = {
        user: {
            firstname: formValues.firstname,
            lastname: formValues.lastname,
            birthDate: formValues.birthDate,
            registrationAddress: ''
        },
        address: {
            city: formValues.city,
            street: formValues.street,
            house: formValues.house,
            apartment: formValues.apartment,
            comment: formValues.comment
        }
    }

    const pizzasData: IBackPizzaOrder[] = pizzas.map((card: IPizzaOrder) => ({
        id: card.pizza.id,
        size: card.size,
        crust: card.crust
    }))

    return async (dispatch: DispatchType) => {
        await instance.post<IBackPizzaOrder[], AxiosResponse>(`/createOrder`, {
            pizzas: pizzasData,
            details: formData
        })

        dispatch(successOrder())
    }
}

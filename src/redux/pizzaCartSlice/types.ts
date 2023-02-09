import { IPizza, ISelectedPizza, statusType } from '@utils/types/types'

export interface IPizzaCartState {
    pizzaList: IPizza[]
    categories: string[]
    currentCategory: string
    status: statusType
    selectedPizzaList: ISelectedPizza[]
    successOrder: boolean
}

export interface IUser {
    firstname: string
    lastname: string
    birthDate: string
    registrationAddress: string
}

export interface IAddress {
    city: string
    street: string
    house: string
    apartment: string
    comment: string
}

export interface IOrderForm {
    user: IUser
    address: IAddress
}

export interface IPizzaOrder {
    id: number
    size: string
    crust: string
}

export interface IOrder {
    pizzas: IPizzaOrder[]
    details: IOrderForm
}

export interface IOrderResponse {
    id: number
    sum: number
    pizzas: IPizza[]
    order: IOrder
}

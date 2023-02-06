import { IPizzaOrder } from '@utils/types/types'

export interface IOrderPageState {
    orderedPizzas: IPizzaOrder[]
    success: boolean
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

export interface IBackPizzaOrder {
    id: number
    size: string
    crust: string
}

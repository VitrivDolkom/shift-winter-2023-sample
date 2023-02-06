import { IPizzaOrder } from '@utils/types/types'
import { IOrderFormValues } from '../OrderForm/types'

export interface IOrderPizzaDispatchProps {
    getSinglePizza: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    setPizzaCrust: (id: number, crust: string) => void
    setPizzaSize: (id: number, size: string) => void
    removePizzaOrder: (id: number) => void
    createOrder: (form: IOrderFormValues, pizzas: IPizzaOrder[]) => void
}

export interface IOrderPizzaProps {
    selectedPizzas: number[]
    orderedPizzas: IPizzaOrder[]
    callbacks: IOrderPizzaDispatchProps
    success: boolean
}

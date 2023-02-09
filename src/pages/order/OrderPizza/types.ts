import { ISelectedPizza } from '@utils/types/types'
import { IOrderFormValues } from '../OrderForm/types'

export interface IOrderPizzaDispatchProps {
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    setPizzaCrust: (id: number, crust: string) => void
    setPizzaSize: (id: number, size: string) => void
    removePizzaOrder: (id: number) => void
    createOrder: () => void
}

export interface IOrderPizzaProps {
    selectedPizzas: ISelectedPizza[]
    callbacks: IOrderPizzaDispatchProps
    success: boolean
}

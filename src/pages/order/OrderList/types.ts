import { ISelectedPizza } from '@utils/types/types'
import { IOrderPizzaDispatchProps } from '../OrderPizza/types'

export interface IOrderListProps {
    pizzas: ISelectedPizza[]
    success: boolean
    callbacks: IOrderPizzaDispatchProps
}

export interface IOrderPizzaCardProps {
    pizzaCard: ISelectedPizza
    success: boolean
    callbacks: IOrderPizzaDispatchProps
}

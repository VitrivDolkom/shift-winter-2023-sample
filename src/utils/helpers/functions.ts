import { IPizzaOrder } from '@utils/types/types'

export const calculatePizzaPrice = (card: IPizzaOrder) => {
    const crust = card.crust
    const size = card.size
    const quantity = card.quantity
    const defaultPrice = card.pizza.price.default

    const crustPrice = card.pizza.price.crust ? card.pizza.price.crust[crust] : 0
    const sizePrice = card.pizza.price.size ? card.pizza.price.size[size] : 0

    const price = (defaultPrice + crustPrice + sizePrice) * quantity
    return price
}

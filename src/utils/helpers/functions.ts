import { IPizza, ISelectedPizza } from '@utils/types/types'

export const calculatePizzaPrice = (card: ISelectedPizza) => {
    const crust = card.crust
    const size = card.size
    const quantity = card.quantity
    const defaultPrice = card.pizza.price.default

    const crustPrice = card.pizza.price.crust ? card.pizza.price.crust[crust] : 0
    const sizePrice = card.pizza.price.size ? card.pizza.price.size[size] : 0

    const price = (defaultPrice + crustPrice + sizePrice) * quantity
    return price
}

export const checkPizzaInCart = (arr: ISelectedPizza[], pizza: IPizza) => {
    if (arr.find((pizzaCard) => pizzaCard.pizza.id === pizza.id) !== undefined) {
        return true
    }

    return false
}

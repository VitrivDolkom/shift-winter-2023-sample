import { IOrderFormValues } from '@pages/order/OrderForm/types'
import { IPizza, ISelectedPizza } from '@utils/types/types'
import { IOrderForm, IPizzaOrder } from '@redux/pizzaCartSlice/types'

export const calculatePizzaPrice = (card: ISelectedPizza) => {
    const crust = card.crust
    const size = card.size
    const quantity = card.quantity
    const defaultPrice = card.pizza.price.default

    const crustPrice = crust !== '' && card.pizza.price.crust !== undefined ? card.pizza.price.crust[crust] : 0
    const sizePrice = card.pizza.price.size[size]

    const price = (defaultPrice + crustPrice + sizePrice) * quantity
    return price
}

export const checkPizzaInCart = (arr: ISelectedPizza[], pizza: IPizza) => {
    if (arr.find((pizzaCard) => pizzaCard.pizza.id === pizza.id) !== undefined) {
        return true
    }

    return false
}

export const configureOrder = (formValues: IOrderFormValues, pizzaList: ISelectedPizza[]) => {
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

    const pizzasData: IPizzaOrder[] = pizzaList.map((card) => ({
        id: card.pizza.id,
        size: card.size,
        crust: card.crust
    }))

    return { pizzas: pizzasData, details: formData }
}

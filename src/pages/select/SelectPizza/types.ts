import { IPizza, IPizzaCategory, ISelectedPizza, statusType } from '@utils/types/types'

export interface ISelectPizzaProps {
    pizzas: IPizza[]
    getPizzas: () => void
    togglePizza: (pizza: IPizza) => void
    categories: IPizzaCategory[]
    currentCategory: number
    status: statusType
    selectedPizzas: ISelectedPizza[]
}

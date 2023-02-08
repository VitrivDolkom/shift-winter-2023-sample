import { IPizza, ISelectedPizza, statusType } from '@utils/types/types'

export interface ISelectPizzaProps {
    pizzas: IPizza[]
    getPizzas: () => void
    togglePizza: (id: number) => void
    categories: string[]
    currentCategory: string
    status: statusType
    selectedPizzas: ISelectedPizza[]
}

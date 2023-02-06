import { IPizza } from '@utils/types/types'

export interface ISelectPizzaState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    pizzasLoaded: boolean
    selectedPizzas: number[]
}

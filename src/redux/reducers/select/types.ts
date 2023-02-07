import { IPizza } from '@utils/types/types'

export interface ISelectPizzaState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    status: string
    selectedPizzas: number[]
}

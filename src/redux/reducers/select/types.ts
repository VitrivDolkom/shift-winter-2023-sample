import { IPizza, statusType } from '@utils/types/types'

export interface ISelectPizzaState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    status: statusType
    selectedPizzas: number[]
}

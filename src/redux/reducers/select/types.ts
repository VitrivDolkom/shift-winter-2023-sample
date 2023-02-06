import { IPizza } from '@utils/types/types'

export interface ISelectPageState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    pizzasLoaded: boolean
    selectedPizzas: number[]
}

import { IPizza } from '@utils/types/types'

export interface ISelectPizzaProps {
    pizzas: IPizza[]
    getPizzas: () => void
    togglePizza: (id: number) => void
    categories: string[]
    currentCategory: string
    isLoaded: boolean
    selectedPizzas: number[]
}

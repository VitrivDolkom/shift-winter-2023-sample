import { IPizza } from '@utils/types/types'

export interface IPizzaCardProps {
    pizza: IPizza
    isSelected: boolean
    togglePizza: (id: number) => void
}

export interface IPizzaListProps {
    pizzas: IPizza[]
    selectedPizzas: number[]
    togglePizza: (id: number) => void
    isLoaded: boolean
}

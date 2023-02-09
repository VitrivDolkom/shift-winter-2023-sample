import { IPizza, ISelectedPizza, statusType } from '@utils/types/types'

export interface IPizzaCardProps {
    pizza: IPizza
    isSelected: boolean
    togglePizza: (pizza: IPizza) => void
}

export interface IPizzaListProps {
    pizzas: IPizza[]
    selectedPizzas: ISelectedPizza[]
    togglePizza: (pizza: IPizza) => void
    status: statusType
}

import { IPizza, ISelectedPizza, statusType } from '@utils/types/types'

export interface IPizzaCardProps {
    pizza: IPizza
    isSelected: boolean
    togglePizza: (id: number) => void
}

export interface IPizzaListProps {
    pizzas: IPizza[]
    selectedPizzas: ISelectedPizza[]
    togglePizza: (id: number) => void
    status: statusType
}

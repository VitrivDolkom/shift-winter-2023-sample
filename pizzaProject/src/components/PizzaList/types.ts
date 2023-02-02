import { IPizza } from "../../types/genereal";

export interface IPizzaCardProps {
    pizza: IPizza
    isSelected: boolean
    togglePizza: (id: number) => void
}

export interface IPizzaListProps {
    pizzas: IPizza[],
    selectedPizzas: number[],
    togglePizza: (id: number) => void
}
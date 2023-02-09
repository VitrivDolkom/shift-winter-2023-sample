import { IPizza, ISelectedPizza } from '@utils/types/types'

export interface IOrderPizzaDispatchProps {
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    setPizzaCrust: (id: number, crust: string) => void
    setPizzaSize: (id: number, size: string) => void
    removePizzaOrder: (pizza: IPizza) => void
    createOrder: () => void
}

export interface IOrderPizzaProps {
    selectedPizzas: ISelectedPizza[]
    callbacks: IOrderPizzaDispatchProps
    successOrder: boolean
}

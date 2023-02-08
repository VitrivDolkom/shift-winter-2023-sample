import { IPizza, ISelectedPizza, statusType } from '@utils/types/types'

export interface IPizzaCartState {
    pizzaList: IPizza[]
    categories: string[]
    currentCategory: string
    status: statusType
    selectedPizzaList: ISelectedPizza[]
    successOrder: boolean
}

import { useAppDispatch, useAppSelector } from '@utils/hooks/hooks'
import { IPizza, statusType } from '@utils/types/types'
import SelectPizza from './SelectPizza'
import { fetchPizzasThunk } from '@redux/pizzaCartSlice/actions/selectPage/actions'
import { togglePizza } from '@redux/pizzaCartSlice/pizzaCartSlice'

const SelectPizzaContainer = () => {
    const pizzas = useAppSelector((state) => state.pizzaCart.pizzaList)
    const categories = useAppSelector((state) => state.pizzaCart.categories)
    const currentCategory = useAppSelector((state) => state.pizzaCart.currentCategory)
    const selectedPizzas = useAppSelector((state) => state.pizzaCart.selectedPizzaList)
    const status = useAppSelector((state) => state.pizzaCart.status)
    const dispatch = useAppDispatch()

    return (
        <SelectPizza
            pizzas={pizzas}
            categories={categories}
            currentCategory={currentCategory}
            status={status}
            selectedPizzas={selectedPizzas}
            getPizzas={() => {
                if (status === statusType.toFetch) {
                    dispatch(fetchPizzasThunk())
                }
            }}
            togglePizza={(pizza: IPizza) => dispatch(togglePizza(pizza))}
        />
    )
}

export default SelectPizzaContainer

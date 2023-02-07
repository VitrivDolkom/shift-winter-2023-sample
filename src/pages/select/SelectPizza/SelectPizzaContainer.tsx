import { useAppDispatch, useAppSelector } from '@utils/hooks/hooks'
import SelectPizza from './SelectPizza'
import { fetchPizzas } from '@redux/reducers/select/asyncActions'
import { togglePizza } from '@redux/reducers/select/selectPizzaSlice'

const SelectPizzaContainer = () => {
    const pizzas = useAppSelector((state) => state.selectPage.pizzas)
    const categories = useAppSelector((state) => state.selectPage.categories)
    const currentCategory = useAppSelector((state) => state.selectPage.currentCategory)
    const selectedPizzas = useAppSelector((state) => state.selectPage.selectedPizzas)
    const status = useAppSelector((state) => state.selectPage.status)
    const dispatch = useAppDispatch()

    return (
        <SelectPizza
            pizzas={pizzas}
            categories={categories}
            currentCategory={currentCategory}
            status={status}
            selectedPizzas={selectedPizzas}
            getPizzas={() => dispatch(fetchPizzas())}
            togglePizza={(id: number) => dispatch(togglePizza(id))}
        />
    )
}

export default SelectPizzaContainer

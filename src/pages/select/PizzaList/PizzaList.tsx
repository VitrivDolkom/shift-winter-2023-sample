import PizzaCardSkeleton from '@components/PizzaCardSkeleton/PizzaCardSkeleton'
import PizzaCard from './PizzaCard'
import { IPizzaListProps } from './types'
import s from './s.module.css'

const PizzaList = ({ pizzas, selectedPizzas, togglePizza, status }: IPizzaListProps) => {
    return (
        <div className={s.list}>
            {pizzas.map((pizza) =>
                status == 'loading' ? (
                    <PizzaCardSkeleton key={pizza.id} />
                ) : (
                    <PizzaCard
                        key={pizza.id}
                        togglePizza={togglePizza}
                        pizza={pizza}
                        isSelected={selectedPizzas.indexOf(pizza.id) !== -1}
                    />
                )
            )}
        </div>
    )
}

export default PizzaList

import { statusType } from '@utils/types/types'
import PizzaCard from './PizzaCard'
import { IPizzaListProps } from './types'
import s from './s.module.css'

const PizzaList = ({ pizzas, selectedPizzas, togglePizza, status }: IPizzaListProps) => (
    <div className={s.list}>
        {status === statusType.loading && <div className={s.loading}>Подождите, пиццы уже в пути...</div>}
        {status === statusType.ok &&
            pizzas.map((pizza) => (
                <PizzaCard
                    key={pizza.id}
                    togglePizza={togglePizza}
                    pizza={pizza}
                    isSelected={selectedPizzas.indexOf(pizza.id) !== -1}
                />
            ))}
    </div>
)

export default PizzaList

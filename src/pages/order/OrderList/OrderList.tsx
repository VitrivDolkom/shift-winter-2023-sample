import OrderPizzaCard from './OrderPizzaCard'
import { IOrderListProps } from './types'

const OrderList = ({ pizzas, success, callbacks }: IOrderListProps) => {
    const pizzasList = pizzas.map((card) => (
        <OrderPizzaCard key={card.pizza.id} success={success} callbacks={callbacks} pizzaCard={card} />
    ))

    return <div>{pizzasList}</div>
}

export default OrderList

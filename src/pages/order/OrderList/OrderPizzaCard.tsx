import { IOrderPizzaCardProps } from './types'
import s from './s.module.css'

const OrderPizzaCard = ({ pizzaCard, success, callbacks }: IOrderPizzaCardProps) => (
    <div className={s.card}>
        <div className={s.imgWrapper}>
            <img src={pizzaCard.pizza.img} alt="photo" />
        </div>
        <div className={s.info}>
            <span className={[s.name, 'name'].join(' ')}>{pizzaCard.pizza.name}</span>
            <span></span>
        </div>
        <div className={s.choice}>
            <ul className={s.crusts}>
                <li
                    className={[s.crust, pizzaCard.crust === 'cheesy' && s.current].join(' ')}
                    onClick={() => callbacks.setPizzaCrust(pizzaCard.pizza.id, 'cheesy')}
                >
                    сыр. корка + {pizzaCard.pizza.price.crust?.cheesy} ₽
                </li>
                <li
                    className={[s.crust, pizzaCard.crust === 'cheesySausage' && s.current].join(' ')}
                    onClick={() => callbacks.setPizzaCrust(pizzaCard.pizza.id, 'cheesySausage')}
                >
                    сыр. соус + {pizzaCard.pizza.price.crust?.cheesySausage} ₽
                </li>
            </ul>
            <ul className={s.sized}>
                <li
                    className={[s.size, pizzaCard.size === 'small' && s.current].join(' ')}
                    onClick={() => callbacks.setPizzaSize(pizzaCard.pizza.id, 'small')}
                >
                    15 см + {pizzaCard.pizza.price.size.small} ₽
                </li>
                <li
                    className={[s.size, pizzaCard.size === 'medium' && s.current].join(' ')}
                    onClick={() => callbacks.setPizzaSize(pizzaCard.pizza.id, 'medium')}
                >
                    20 см + {pizzaCard.pizza.price.size.medium} ₽
                </li>
                <li
                    className={[s.size, pizzaCard.size === 'large' && s.current].join(' ')}
                    onClick={() => callbacks.setPizzaSize(pizzaCard.pizza.id, 'large')}
                >
                    30 см + {pizzaCard.pizza.price.size.large} ₽
                </li>
            </ul>
        </div>
        <div className={[s.price, 'price'].join(' ')}>{pizzaCard.price} ₽</div>
        {!success && (
            <div className={s.actions}>
                <div className={s.quantityActions}>
                    <div onClick={() => callbacks.decreaseQuantity(pizzaCard.pizza.id)} className={s.decrease}></div>
                    <div className={s.quantity}>{pizzaCard.quantity}</div>
                    <div onClick={() => callbacks.increaseQuantity(pizzaCard.pizza.id)} className={s.increase}>
                        +
                    </div>
                </div>
                <div onClick={() => callbacks.removePizzaOrder(pizzaCard.pizza.id)} className={s.remove}>
                    x
                </div>
            </div>
        )}
    </div>
)

export default OrderPizzaCard

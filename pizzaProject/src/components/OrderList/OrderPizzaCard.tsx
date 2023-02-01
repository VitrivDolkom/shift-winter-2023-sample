import React from 'react'
import { IOrderPizzaDispatchProps, IPizzaOrder } from '../../modulesTs/orderPageIntarfaces'
import s from './s.module.css'

interface IOrderPizzaCardProps {
	pizzaCard: IPizzaOrder,
	success: boolean,
	callbacks: IOrderPizzaDispatchProps
}


const OrderPizzaCard = ({ pizzaCard, success, callbacks }: IOrderPizzaCardProps) => {
	return (
		<div className={s.card}>
			<div className={s.imgWrapper}>
				<img src={pizzaCard.pizza.img} alt='photo' />
			</div>
			<div className={s.info}>
				<span className={[s.name, 'name'].join(' ')}>{pizzaCard.pizza.name}</span>
				<span></span>
			</div>
			<div className={[s.price, 'price'].join(' ')}>{pizzaCard.price} ₽</div>
			{success ? '' :
				<div className={s.actions}>
					<div className={s.quantityActions}>
						<div onClick={() => callbacks.decreaseQuantity(pizzaCard.pizza.id)} className={s.decrease}></div>
						<div className={s.quantity}>{pizzaCard.quantity}</div>
						<div onClick={() => callbacks.increaseQuantity(pizzaCard.pizza.id)} className={s.increase}>+</div>
					</div>
					<div onClick={() => callbacks.removePizzaOrder(pizzaCard.pizza.id)} className={s.remove}>x</div>
				</div>
			}
		</div>
	)
}

export default OrderPizzaCard
import FooterComponent from '@components/Footer/Footer'
import HeaderContainer from '@components/Header/HeaderContainer'
import OrderForm from '../OrderForm/OrderForm'
import OrderList from '../OrderList/OrderList'
import SuccessOrder from '../SuccessOrder/SuccessOrder'
import { IOrderPizzaProps } from './types'
import s from './s.module.css'

const OrderPizza = ({ selectedPizzas, successOrder, callbacks }: IOrderPizzaProps) => {
    const pizzaQuantity = selectedPizzas.reduce((sum, card) => sum + card.quantity, 0)
    const pizzaPrice = selectedPizzas.reduce((sum, card) => sum + card.price, 0)

    return (
        <div className={s.main}>
            <HeaderContainer />
            <div className={s.content}>
                <div className="box">
                    <div className={[s.title, 'title'].join(' ')}>Оформить заказ</div>
                    <span className={s.generalInfo}>
                        {pizzaQuantity} шт. за {pizzaPrice} ₽
                    </span>
                    <OrderList success={successOrder} pizzas={selectedPizzas} callbacks={callbacks} />
                    {successOrder && <SuccessOrder />}
                    {successOrder || <OrderForm onOrderSubmit={callbacks.createOrder} orderedPizzas={selectedPizzas} />}
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default OrderPizza

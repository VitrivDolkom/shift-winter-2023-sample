import emptyCart from '@assets/images/emptyCart.png'
import s from './s.module.css'

const EmptyPizzaCart = () => (
    <div className={s.wrapper}>
        <div className="title">Корзина пуста</div>
        <div className={s.img}>
            <img src={emptyCart} alt="пустая корзина" />
        </div>
    </div>
)

export default EmptyPizzaCart

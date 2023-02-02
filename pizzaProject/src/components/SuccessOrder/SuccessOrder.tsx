import s from './s.module.css'
import perez from '../../assets/images/perez.png'

const SuccessOrder = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Ваш заказ принят!</div>
            <img src={perez} alt="мега харош" />
            <div className={s.title}>
                Доставим по указанному адресу <br />в течение ∞ минут
            </div>
        </div>
    )
}

export default SuccessOrder

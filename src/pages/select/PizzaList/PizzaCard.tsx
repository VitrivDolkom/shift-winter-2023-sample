import { useState } from 'react'
import PizzaImgSkeleton from '@components/PizzaImgSkeleton/PizzaImgSkeleton'
import { IPizzaCardProps } from './types'
import add from '@assets/images/add.svg'
import s from './s.module.css'

const PizzaCard = ({ pizza, isSelected, togglePizza }: IPizzaCardProps) => {
    const [imgLoading, setImgLoading] = useState(true)

    return (
        <div className={s.card}>
            <div className={s.content}>
                <div className={s.imgWrapper}>
                    <img
                        src={pizza.img}
                        className={[imgLoading && 'loading'].join(' ')}
                        alt="фото"
                        onLoad={() => setImgLoading(false)}
                    />
                    {/* {imgLoading && <PizzaImgSkeleton />} */}
                </div>
                <div className={s.info}>
                    <span className="name">{pizza.name}</span>
                </div>
                <div className={s.ingredients}>{pizza.ingredients.join(', ')}</div>
            </div>
            <div className={s.footer}>
                <div className="price">{pizza.price.default} ₽</div>
                <div onClick={() => togglePizza(pizza.id)} className={[s.add, isSelected && 'selected'].join(' ')}>
                    <img src={add} alt="добавить в корзину" />
                </div>
            </div>
        </div>
    )
}

export default PizzaCard

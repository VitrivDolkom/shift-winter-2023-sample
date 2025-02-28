import { Link } from 'react-router-dom'
import Logo from '@components/Logo/Logo'
import { IStateHeaderProps } from './types'
import s from './s.module.css'

const Header = ({ orderQuantity }: IStateHeaderProps) => (
    <div className="box">
        <header className={s.header}>
            <Link to="/">
                <Logo />
            </Link>
            <ul className={s.nav}>
                <li className={s.link}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={s.link}>
                    <Link to="/select">Выбрать пиццу</Link>
                </li>
                <li className={s.link}>
                    <Link to="/order">Оформить заказ{!!orderQuantity && ` (${orderQuantity})`}</Link>
                </li>
            </ul>
        </header>
    </div>
)

export default Header

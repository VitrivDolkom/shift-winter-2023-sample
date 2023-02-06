import { ICategoriesProps } from './types'
import s from './s.module.css'

const Categories = ({ categories, currentCategory }: ICategoriesProps) => {
    let classNames: string

    const categoriesBtns = categories.map((category, index) => {
        classNames = [s.item, category === currentCategory && s.current].join(' ')

        return (
            <div className={classNames} key={index}>
                {category}
            </div>
        )
    })

    return <ul className={s.list}>{categoriesBtns}</ul>
}

export default Categories

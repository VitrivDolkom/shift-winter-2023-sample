import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './s.module.css'

const PizzaCardSkeleton = () => (
    <SkeletonTheme baseColor="#FFF" highlightColor="#d4d4d4" width={220} height={500}>
        <div className={s.wrap}>
            <div className={s.img}>
                <Skeleton height={138} width={138} borderRadius={200} />
            </div>
            <div className={s.name}>
                <Skeleton height={36} width={150} />
            </div>
            <div className={s.info}>
                <Skeleton height={50} />
            </div>
            <div className={s.footer}>
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={30} borderRadius={20} />
            </div>
        </div>
    </SkeletonTheme>
)

export default PizzaCardSkeleton

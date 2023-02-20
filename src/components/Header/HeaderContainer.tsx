import { useAppSelector } from '@utils/hooks/hooks'
import Header from './Header'

const HeaderContainer = () => (
    <Header orderQuantity={useAppSelector((state) => state.pizzaCart.selectedPizzaList.length)} />
)

export default HeaderContainer

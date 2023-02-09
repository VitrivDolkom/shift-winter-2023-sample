import { useAppDispatch, useAppSelector } from '@utils/hooks/hooks'
import OrderPizza from './OrderPizza'
import {
    decreasePizzaQuantity,
    increasePizzaQuantity,
    removePizza,
    setPizzaCrust,
    setPizzaSize
} from '@redux/pizzaCartSlice/pizzaCartSlice'

const OrderPizzaContainer = () => {
    const selectedPizzas = useAppSelector((state) => state.pizzaCart.selectedPizzaList)
    const success = useAppSelector((state) => state.pizzaCart.successOrder)
    const dispatch = useAppDispatch()
    return (
        <OrderPizza
            selectedPizzas={selectedPizzas}
            success={success}
            callbacks={{
                increaseQuantity: (id: number) => dispatch(increasePizzaQuantity(id)),
                decreaseQuantity: (id: number) => dispatch(decreasePizzaQuantity(id)),
                setPizzaCrust: (id: number, crust: string) => dispatch(setPizzaCrust({ id, crust })),
                setPizzaSize: (id: number, size: string) => dispatch(setPizzaSize({ id, size })),
                removePizzaOrder: (id: number) => dispatch(removePizza(id)),
                createOrder: () => {
                    console.log('developing')
                }
            }}
        />
    )
}

export default OrderPizzaContainer

import { configureOrder } from '@utils/helpers/functions'
import { useAppDispatch, useAppSelector } from '@utils/hooks/hooks'
import { IPizza } from '@utils/types/types'
import OrderPizza from './OrderPizza'
import { createOrderThunk } from '@redux/pizzaCartSlice/actions/orderPage/actions'
import {
    decreasePizzaQuantity,
    increasePizzaQuantity,
    setPizzaCrust,
    setPizzaSize,
    togglePizza
} from '@redux/pizzaCartSlice/pizzaCartSlice'

const OrderPizzaContainer = () => {
    const selectedPizzas = useAppSelector((state) => state.pizzaCart.selectedPizzaList)
    const successOrder = useAppSelector((state) => state.pizzaCart.successOrder)
    const dispatch = useAppDispatch()
    return (
        <OrderPizza
            selectedPizzas={selectedPizzas}
            successOrder={successOrder}
            callbacks={{
                increaseQuantity: (id: number) => dispatch(increasePizzaQuantity(id)),
                decreaseQuantity: (id: number) => dispatch(decreasePizzaQuantity(id)),
                setPizzaCrust: (id: number, crust: string) => dispatch(setPizzaCrust({ id, crust })),
                setPizzaSize: (id: number, size: string) => dispatch(setPizzaSize({ id, size })),
                removePizzaOrder: (pizza: IPizza) => dispatch(togglePizza(pizza)),
                createOrder: (formValues, selectedPizzaList) => {
                    dispatch(createOrderThunk(configureOrder(formValues, selectedPizzaList)))
                }
            }}
        />
    )
}

export default OrderPizzaContainer

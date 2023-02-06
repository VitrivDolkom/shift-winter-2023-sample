import { IAction } from '@utils/types/types'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import SelectPizza from './SelectPizza'
import { getPizzas, togglePizza } from '@redux/reducers/select/actions'
import { StateType } from '@redux/store'

const mapStateToProps = (state: StateType) => ({
    pizzas: state.selectPage.pizzas,
    categories: state.selectPage.categories,
    currentCategory: state.selectPage.currentCategory,
    isLoaded: state.selectPage.pizzasLoaded,
    errorLoading: state.selectPage.errorLoading,
    selectedPizzas: state.selectPage.selectedPizzas
})

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, IAction>) => ({
    getPizzas: () => dispatch(getPizzas()),
    togglePizza: (id: number) => dispatch(togglePizza(id))
})

const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)

export default SelectPizzaContainer

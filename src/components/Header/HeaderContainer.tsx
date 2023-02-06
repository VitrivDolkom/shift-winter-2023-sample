import { connect } from 'react-redux'
import HeaderComponent from './Header'
import { IStateHeaderProps } from './types'
import { StateType } from '@redux/store'

const mapStateToProps = (state: StateType): IStateHeaderProps => ({
    orderQuantity: state.selectPage.selectedPizzas.length
})

const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer

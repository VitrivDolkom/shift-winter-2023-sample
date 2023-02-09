import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage/MainPage'
import OrderPizzaContainer from './pages/order/OrderPizza/OrderPizzaContainer'
import SelectPizzaContainer from './pages/select/SelectPizza/SelectPizzaContainer'
import back from '@assets/images/back.svg'
import s from '@assets/styles/App.module.css'

document.body.style.backgroundImage = `url(${back})`

const App = () => (
    <div className={s.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/select" element={<SelectPizzaContainer />} />
                <Route path="/order" element={<OrderPizzaContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App

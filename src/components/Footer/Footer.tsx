import Logo from '@components/Logo/Logo'
import facebook from '@assets/images/facebook.svg'
import inst from '@assets/images/inst.svg'
import twitter from '@assets/images/twitter.svg'
import './s.css'

const FooterComponent = () => (
    <footer className="footer">
        <div className="box">
            <div className="left">
                <Logo />
                <span>Copyright © 2000 - 2023</span>
            </div>
            <div className="right">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={inst} alt="instagram" />
            </div>
        </div>
    </footer>
)

export default FooterComponent

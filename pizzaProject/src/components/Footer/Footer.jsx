import React from 'react'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import inst from '../../assets/inst.svg'
import './s.css'
import Logo from '../Logo/Logo'


const Footer = () => {
	return (
		<footer className='footer'>
			<div className='box'>
				<div className='left'>
					<Logo />
					<span>Copyright © 2000 - 2023</span>
				</div>
				<div className='right'>
					<img src={facebook} alt="facebook" />
					<img src={twitter} alt="twitter" />
					<img src={inst} alt="instagram" />
				</div>
			</div>
		</footer>
	)
}

export default Footer
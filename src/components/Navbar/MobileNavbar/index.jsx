import React from 'react'
import cls from './MobileNavbar.module.scss'
import { RiCopyrightLine } from 'react-icons/ri'
import { FaShoppingBag } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import Dropdown from './Dropdown/Dropdown'
import logo from '../../../assets/img/pngDayarLogo.png'
import ProfileImg from "../../ProfileImg/ProfileImg";

const MobileNavbar = ({ moneySum, setIsDropDown, isDropDown }) => {
	const navigate = useNavigate()

	return (
		<div className={cls.navContainer}>
			<div className={cls.navWrapper}>
				<GoThreeBars
					className={cls.burgerIcon}
					onClick={() => setIsDropDown((prev) => !prev)}
				/>

				<Dropdown isDropDown={isDropDown} setIsDropDown={setIsDropDown} />

				<div className={cls.logo} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" />
				</div>

				<div className={cls.personsContainer}>
					<div className={cls.cart}>
						<span className={cls.sum}>
							<span>{moneySum}</span>
							<RiCopyrightLine />
						</span>
						<span className={cls.cartIcon}>
							<FaShoppingBag onClick={() => navigate('/cart')} />
						</span>
					</div>
					<ProfileImg/>
				</div>
			</div>
		</div>
	)
}

export default MobileNavbar

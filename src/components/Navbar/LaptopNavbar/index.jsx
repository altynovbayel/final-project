import React from 'react'
import cls from './LaptopNavbar.module.scss'
import logoImg from "../../../assets/img/pngDayarLogo.png";
import { navbarNavigation } from '../../../utils/navbarNavigation'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
import { RiCopyrightLine } from 'react-icons/ri'
import { BsPersonFill, BsSearch } from 'react-icons/bs'
import NavbarSelect from '../../UI/NavbarSelect'

const LaptopNavbar = ({ moneySum }) => {
	const navigate = useNavigate()
	const [searchInput, setSearchInput] = React.useState('')

	return (
		<div className={cls.navbar}>
			<div className={cls.navbarTop}>
				<div className={cls.wrapperTop}>
					<div className={cls.logo} onClick={() => navigate('/')}>
						<img src={logoImg} alt="logo"/>
					</div>
					<div className={cls.navigations}>
						{navbarNavigation.map(({ id, route, title }) => (
							<Link key={id} to={route}>
								{title}
							</Link>
						))}
					</div>
					<div className={cls.personsContainer}>
						<div className={cls.cart}>
							<span>
								<span>{moneySum}</span>
								<RiCopyrightLine />
							</span>
							<FaShoppingBag onClick={() => navigate('/cart')} />
						</div>
						<div className={cls.profile}>
							<BsPersonFill onClick={() => navigate('/profile')} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LaptopNavbar
// {
// 	navbarCategories.map(category => (
// 		<NavLink
// 			className={({isActive}) => isActive ? cls.active : ''}
// 			key={category.id}
// 			to={category.route}
// 		>
// 			<category.categoryImg/>
// 			<span>{category.title}</span>
// 		</NavLink>
// 	))
// }

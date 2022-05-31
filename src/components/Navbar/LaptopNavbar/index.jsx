import React from 'react';
import cls from "./LaptopNavbar.module.scss";
import {navbarCategories, navbarNavigation} from "../../../utils/navbarNavigation";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {FaShoppingBag} from "react-icons/fa";
import {RiCopyrightLine} from "react-icons/ri";
import {BsPersonFill} from "react-icons/bs";


const LaptopNavbar = ({moneySum}) => {
	const navigate = useNavigate()

	return (
		<div className={cls.navbar}>
			<div className={cls.navbarTop}>
				<div className={cls.wrapperTop}>
					<div className={cls.logo}>
						Logo
					</div>
					<div className={cls.navigations}>
						{
							navbarNavigation.map(({id, route, title}) => (
								<Link
									key={id}
									to={route}
								>
									{title}
								</Link>
							))
						}
					</div>
					<div className={cls.personsContainer}>
						<div className={cls.cart}>
							<span>
								<span>{moneySum}</span>
								<RiCopyrightLine/>
							</span>
							<FaShoppingBag onClick={() => navigate('/cart')}/>
						</div>
						<div className={cls.profile}>
							<BsPersonFill onClick={() => navigate('/profile')}/>
						</div>
					</div>
				</div>
			</div>
			<div className={cls.navbarUnder}>
				<ul className={cls.wrapperUnder}>
					{
						navbarCategories.map(category => (
							<NavLink
								className={({isActive}) => isActive ? cls.active : ''}
								key={category.id}
								to={category.route}
							>
								<category.categoryImg/>
								<span>{category.title}</span>
							</NavLink>
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default LaptopNavbar;

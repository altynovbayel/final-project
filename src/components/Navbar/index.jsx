import React from 'react';
import cls from "./Navbar.module.scss";
import {navbarCategories, navbarNavigation} from "../../utils/navbarNavigation";
import {Link} from "react-router-dom";
import {RiCopyrightLine} from "react-icons/ri";
import {BsFillPersonFill} from "react-icons/bs";
import {FaShoppingBag} from "react-icons/fa";
import {GoThreeBars} from "react-icons/go";


const Navbar = () => {
	const [moneySum, setMoneySum] = React.useState(0)
	const [isDropDown, setIsDropDown] = React.useState(false)

	return (
		<>
			<div className={cls.topNavContainer}>
				<div className={cls.topNavWrapper}>
					<div className={cls.topNav}>
						<GoThreeBars className={cls.burgerIcon}/>
						<nav
							className={isDropDown && cls.active}
						>
							{
								navbarNavigation.map(({id, title, route}) => (
									<Link key={id} to={route}> {title} </Link>
								))
							}
						</nav>
						<div>
							<div className={cls.cart}>
								<span className={cls.sum}>
									<span>{moneySum}</span>
									<RiCopyrightLine/>
								</span>
								<span className={cls.cartIcon}>
									<FaShoppingBag/>
								</span>
							</div>
							<div className={cls.profile}>
								<BsFillPersonFill/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={cls.navContainer}>
				<div className={cls.navWrapper}>
					<nav>
						{
							navbarCategories.map(category => (
								<Link
									key={category.id}
									to={category.route}
								>
									{<category.categoryImg/>}
									<span>{category.title}</span>
								</Link>
							))
						}
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;

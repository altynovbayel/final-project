import React from 'react';
import cls from "./MobileNavbar.module.scss";
import {MdArrowBackIosNew} from "react-icons/md";
import {RiCopyrightLine} from "react-icons/ri";
import {FaShoppingBag} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import {GoThreeBars} from "react-icons/go";
import Dropdown from "./Dropdown";


const MobileNavbar = ({moneySum, setIsDropDown, isDropDown}) => {
	const navigate = useNavigate()

	return (
		<div className={cls.navContainer}>
			<div className={cls.navWrapper}>
				<GoThreeBars
					className={cls.burgerIcon}
					onClick={() => setIsDropDown(prev => !prev)}
				/>

				<Dropdown isDropDown={isDropDown} setIsDropDown={setIsDropDown}/>

				<div
					className={cls.logo}
					onClick={() => navigate('/')}
				>
					Logo
				</div>

				<div className={cls.personsContainer}>
					<div className={cls.cart}>
						<span className={cls.sum}>
							<span>{moneySum}</span>
							<RiCopyrightLine/>
						</span>
						<span className={cls.cartIcon}>
							<FaShoppingBag onClick={() => navigate('/cart')}/>
						</span>
					</div>
					<div className={cls.profile}>
						<BsFillPersonFill onClick={() => navigate('/profile')}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;

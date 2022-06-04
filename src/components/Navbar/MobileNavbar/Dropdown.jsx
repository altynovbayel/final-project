import React from 'react';
import {navbarCategories, navbarNavigation} from "../../../utils/navbarNavigation";
import { NavLink, useNavigate} from "react-router-dom";
import {MdArrowBackIosNew} from "react-icons/md";
import cls from "./Dropdown.module.scss";


const Dropdown = ({isDropDown, setIsDropDown}) => {
	const navigate = useNavigate()

	return (
		<nav className={isDropDown ? `${cls.active} ${cls.dropdown}` : `${cls.dropdown}`}>
			<div className={cls.navigation}>
				<h4>Навигация</h4>
				{
					navbarNavigation.map(({id, title, route}) => (
						<NavLink
							key={id}
							to={route}
							onClick={() => setIsDropDown(prev => !prev)}
							className={({isActive}) => isActive ? `${cls.active}` : ''}
						> {title} </NavLink>
					))
				}
			</div>
			<div className={cls.categories}>
				<h4>Категории</h4>
				{
					navbarCategories.map(category => (
						<NavLink
							key={category.id}
							to={category.route}
							onClick={() => setIsDropDown(prev => !prev)}
							className={({isActive}) => isActive ? `${cls.active}` : ''}
						>
							{<category.categoryImg/>}
							<span>{category.title}</span>
						</NavLink>
					))
				}
			</div>
			<MdArrowBackIosNew
				className={cls.closeDropdown}
				onClick={() => setIsDropDown(prev => !prev)}
			/>
			<div
				className={cls.logo}
				onClick={() => {
					navigate('/')
					setIsDropDown(prev => !prev)
				}}
			>
				Logo
			</div>
		</nav>
	);
};

export default Dropdown;

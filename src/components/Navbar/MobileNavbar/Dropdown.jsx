import React from 'react';
import {navbarCategories, navbarNavigation} from "../../../utils/navbarNavigation";
import {Link} from "react-router-dom";
import {MdArrowBackIosNew} from "react-icons/md";
import cls from "./Dropdown.module.scss";


const Dropdown = ({isDropDown, setIsDropDown}) => {
	return (
		<nav className={isDropDown ? `${cls.active} ${cls.dropdown}` : `${cls.dropdown}`}>
			<div className={cls.navigation}>
				<h4>Навигация</h4>
				{
					navbarNavigation.map(({id, title, route}) => (
						<Link
							key={id}
							to={route}
							onClick={() => setIsDropDown(prev => !prev)}
						> {title} </Link>
					))
				}
			</div>
			<div className={cls.categories}>
				<h4>Категории</h4>
				{
					navbarCategories.map(category => (
						<Link
							key={category.id}
							to={category.route}
							onClick={() => setIsDropDown(prev => !prev)}
						>
							{<category.categoryImg/>}
							<span>{category.title}</span>
						</Link>
					))
				}
			</div>
			<MdArrowBackIosNew
				className={cls.closeDropdown}
				onClick={() => setIsDropDown(prev => !prev)}
			/>
		</nav>
	);
};

export default Dropdown;

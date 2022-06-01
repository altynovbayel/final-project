import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import LaptopNavbar from "./LaptopNavbar";
import cls from "./Navbar.module.scss";


const Navbar = () => {
	const [moneySum, setMoneySum] = React.useState(0)
	const [isDropDown, setIsDropDown] = React.useState(false)
	const navigate = useNavigate()
	const isMobileOrTablet = useMediaQuery({query: '(max-width: 768px)'})
	const isLaptopOrMonitor = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<>
			{
				isMobileOrTablet &&
				<MobileNavbar
					moneySum={moneySum}
					setIsDropDown={setIsDropDown}
					isDropDown={isDropDown}
				/>
			}
			{
				isLaptopOrMonitor &&
				<LaptopNavbar
					moneySum={moneySum}
				/>
			}
		</>
	)
};


export default Navbar;

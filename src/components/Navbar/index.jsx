import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'
import LaptopNavbar from './LaptopNavbar'
import {getUser} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";

const Navbar = () => {
	const [moneySum, setMoneySum] = React.useState(null)
	const [isDropDown, setIsDropDown] = React.useState(false)
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
	const isLaptopOrMonitor = useMediaQuery({ query: '(min-width: 768px)' })
  
  const {isAuth} = useIsLogin()
 React.useEffect(() => {
   getUser(isAuth?.uid).then(r => setMoneySum(r.data.totalPrice))
 })

	return (
		<>
			{isMobileOrTablet && (
				<MobileNavbar
					moneySum={moneySum}
					setIsDropDown={setIsDropDown}
					isDropDown={isDropDown}
				/>
			)}
			{isLaptopOrMonitor && <LaptopNavbar moneySum={moneySum} />}
		</>
	)
}

export default Navbar

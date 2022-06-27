import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'
import LaptopNavbar from './LaptopNavbar'
import { getUser } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'

const Navbar = () => {
	const [moneySum, setMoneySum] = React.useState(0)
	const [isDropDown, setIsDropDown] = React.useState(false)
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
	const isLaptopOrMonitor = useMediaQuery({ query: '(min-width: 768px)' })
	const { totalPages } = useIsLogin()
	const { isAuth } = useIsLogin()

	React.useEffect(() => {
		getUser(isAuth?.uid)
			.then(r => r.data?.cart)
			.then(res => {
				if(res){
					const base = Object.entries(res).map(([id , item]) => {return {...item, id}})
					base.forEach(item => setMoneySum( sum => sum + item.count * item.price))
				}
			})
	} , [isAuth?.uid , totalPages])

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

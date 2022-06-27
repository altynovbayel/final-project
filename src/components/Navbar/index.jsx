import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'
import LaptopNavbar from './LaptopNavbar'
import { getFromCart, getUser } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'

const Navbar = () => {
	const [isDropDown, setIsDropDown] = React.useState(false)
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
	const isLaptopOrMonitor = useMediaQuery({ query: '(min-width: 768px)' })
  const { totalPages, isAuth, setMoneySum, moneySum } = useIsLogin()

	React.useEffect(() => {
		getUser(isAuth?.uid)
			.then(r => r.data?.cart)
			.then(res => {
				const base = Object.entries(res).map(([id , item]) => {return {...item, id}})
        const price = base.reduce((total, item) => {
          return total += item.count * item.price
        }, 0)
        setMoneySum(price)
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

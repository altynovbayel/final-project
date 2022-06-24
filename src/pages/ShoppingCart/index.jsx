import React from 'react'
import { getFromCart } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'
import cls from '../Main/main.module.scss'
import Loader from '../Favorites/Loader/Loader'
import Title from '../../components/UI/TitleText'
import CartCard from '../../components/CartCards'
import EmptyData from '../../components/UI/EmptyData/EmptyData'

function ShoppingCart() {
	const [base, setBase] = React.useState(null)
	const { isAuth } = useIsLogin()
	function getCard() {
		getFromCart(isAuth.uid).then((res) => {
			const arr = res.data
				? Object.values(res.data)
				: false
			setBase(arr)
		})
	}

	React.useEffect(() => {
		getCard()
	}, [])

	if (base === false) return <EmptyData text={'Ваша корзина пуста'} />
	if (!base)
		return (
			<div className={cls.loading}>
				<Loader />
			</div>
		)
	return (
		<React.Fragment>
			<Title text={'Ваша корзина'} />
			{
				<CartCard
					productList={base}
					setProductList={setBase}
					getCard={getCard}
				/>
			}
		</React.Fragment>
	)
}

export default ShoppingCart

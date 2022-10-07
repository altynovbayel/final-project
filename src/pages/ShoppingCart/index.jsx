import React, {useState} from 'react'
import {
	getAllOrderedProducts,
	getFromCart,
	getOrderedProducts,
	getUser,
	orderProduct,
	removeAllCart
} from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'
import cls from '../Main/main.module.scss'
import Loader from '../../components/Loader/Loader'
import Title from '../../components/UI/TitleText'
import CartCard from '../../components/CartCards'
import EmptyData from '../../components/UI/EmptyData/EmptyData'
import c from './ShoppingCart.module.scss'
import { updateProfile } from 'firebase/auth'
import useAlert from '../../hooks/useAlert'
import {useNavigate} from "react-router-dom";
import Button from "../../components/UI/Button";

function ShoppingCart() {
	const [base, setBase] = React.useState(null)
	const [userData, setUserData] = useState(null);
	const { isAuth, setMoneySum, moneySum } = useIsLogin()
	const navigate = useNavigate()
	const { actions } = useAlert()

	function getCard() {
		getFromCart(isAuth.uid).then((res) => {
			const arr = res.data ? Object.values(res.data) : false
			setBase(arr)
		})
	}

	function removeAll() {
		actions.sweetAlert('Удалено всё из корзины')
		removeAllCart(isAuth?.uid).then((r) => r && getCard())
		updateProfile(isAuth?.uid, { totalPrice: 0 })
			.then(() => setMoneySum(0))
	}

	React.useEffect(() => {
		getUser(isAuth?.uid).then(r => {
			if (r.data){
				setUserData(r.data)
			}
		})
		getCard()
	}, [isAuth?.uid])

	function handleOrder() {
		actions.sweetAlert('Ваш заказ принят')
		orderProduct(isAuth?.uid,
			{
				products: base,
				date: new Date().toLocaleDateString(),
				orderState: false,
				fullPrice: moneySum,
				userData: {
					username: isAuth?.displayName,
					phoneNumber: userData.phoneNumber,
					photoUrl: isAuth?.photoURL,
					email: isAuth?.email,
				}
			})
			.then(r => {
				localStorage.setItem('orderId', r.data.name)
		})
			.then(() => {
				navigate('/order')
				setMoneySum(0)
			})

	}

	if (base === false) return <>
		<EmptyData text={'Ваша корзина пуста'} style={{position: 'relative'}}/>
		<Button
			buttonText={'Перейти к покупкам'}
			onClick={() => navigate('/')}
			style={{
				position: 'absolute',
				width: 200,
				margin: '0 auto',
				bottom: '45%',
				left: '50%',
				fontWeight: '500',
				transform: 'translateX(-50%)',
			}}
		/>
	</>

	if (!base)
		return (
			<div className={cls.loading}>
				{' '}
				<Loader />{' '}
			</div>
		)

	return (
		<React.Fragment>
			<Title text={'Ваша корзина'} />
			<div className={c.btn}>
				<button onClick={removeAll}>Удалить всё</button>
			</div>
			{
				<CartCard
					productList={base}
					setProductList={setBase}
					getCard={getCard}
				/>
			}
			<div className={c.order}>
				<button onClick={handleOrder}>Заказать</button>
			</div>
		</React.Fragment>
	)
}

export default ShoppingCart

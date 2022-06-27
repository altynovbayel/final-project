import React from 'react';
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import useIsLogin from "../../hooks/useIsLogin";
import {getSingleFromCart} from "../../configs";

const CardButton = ({handleGoToShoppingCart, productId, productBase}) => {
	const [isInCart, setIsInCart] = React.useState(false)
	const navigate = useNavigate()
	const {isAuth} = useIsLogin()
	React.useEffect(() => {
		getSingleFromCart(productId, isAuth?.uid).then(r => {
			r.data && setIsInCart(true)
		})
	}, [isAuth?.uid, productId, productBase])

	return <>
		{!isInCart ? (
			<Button
				buttonText='В корзину'
				onClick={() => {
					isAuth
						? handleGoToShoppingCart(productId)
						: navigate('/user/auth')
				}}
			/>
		) : (
			<Button
				buttonText='Добавлено'
				style={{background: '#E77B3AEA'}}
				onClick={() => navigate('/cart')}
			/>
		)}
	</>

};

export default CardButton;

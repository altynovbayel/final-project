import React from 'react';
import Button from "../../../components/UI/Button";
import useIsLogin from "../../../hooks/useIsLogin";
import {useNavigate} from "react-router-dom";
import {getSingleFromCart} from "../../../configs";

const CartMoreButton = ({productId, handleOrderProduct, productData}) => {
	const [isInCart, setIsInCart] = React.useState(false)
	const {isAuth} = useIsLogin()
	const navigate = useNavigate()
	React.useEffect(() => {
		getSingleFromCart(productId, isAuth?.uid).then(r => {
			r.data && setIsInCart(true)
		})
	}, [isAuth?.uid, productId, productData])

	return  <>
		{!isInCart ? (
			<Button
				buttonText='В корзину'
				onClick={() => {
					isAuth
						? handleOrderProduct()
						: navigate('/user/auth')
				}}
			/>
		) : (
			<Button
				buttonText='Добавлено'
				onClick={() => navigate('/cart')}
			/>
		)}
	</>
};

export default CartMoreButton;

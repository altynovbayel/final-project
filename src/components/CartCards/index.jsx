import React from 'react'
import c from './CartCards.module.scss'
import {useNavigate} from 'react-router-dom'
import useIsLogin from '../../hooks/useIsLogin'
import {AiOutlineStar, AiTwotoneDelete} from 'react-icons/ai'
import useAlert from '../../hooks/useAlert'
import {
	changeCount,
	getSingleFromCart,
	removeCart,
	getUser,
} from '../../configs'

function CartCard({productList, setProductList, getCard}) {
	const navigate = useNavigate()
	const {actions} = useAlert()
	const {isAuth, setMoneySum} = useIsLogin()

	function countIncrement(id) {
		getSingleFromCart(id, isAuth?.uid).then((r) => {
			setMoneySum((sum) => sum + r.data.count * r.data.price)
			changeCount(isAuth?.uid, id, {count: r.data.count + 1}).then(
				(r) => r && getCard()
			)
		})
	}

	function countDecrement(id) {
		getSingleFromCart(id, isAuth?.uid).then((r) => {
			setMoneySum((sum) => sum - r.data.count * r.data.price)
			changeCount(isAuth?.uid, id, {count: r.data.count - 1}).then(
				(r) => r && getCard()
			)
		})
	}

	function handleRemoveCard(id) {
		actions.sweetAlert('Удалено из корзины')
		removeCart(isAuth.uid, id).then((r) => r && getCard())
		getSingleFromCart(id, isAuth?.uid).then((r) =>
			setMoneySum((sum) => sum - r.data.count * r.data.price)
		)
	}

	return (
		<>
			<div className={c.container}>
				{productList.map(
					({
						 images,
						 productName,
						 price,
						 id,
						 count,
						 category,
						 reviewGrade,
					 }) => (
						<div key={id} className={c.card}>
							<div
								className={c.card_img}
								onClick={() => navigate(`/products/${category}/${id}`)}
							>
								<img src={images[0]} alt='img'/>
							</div>
							<div className={c.card_body}>
								<div className={c.name}>
									{
										productName.split('').length > 20
											? `${productName.split('').slice(0, 16).join('')}...`
											: productName
									}
									<div className={c.del}>
										<AiTwotoneDelete onClick={() => handleRemoveCard(id)}/>
									</div>
								</div>
								<div className={c.price}>
									{reviewGrade === 'null' ? (
										<span></span>
									) : (
										<>
											{reviewGrade}
											<AiOutlineStar/>
										</>
									)}
								</div>
								<div className={c.counter}>
									<button
										onClick={() => countDecrement(id)}
										disabled={count === 1}
									>
										-
									</button>
									<span>{count}</span>
									<button onClick={() => countIncrement(id)}>+</button>
								</div>
								<div className={c.priceBlock}>
									<div className={c.price}>Цена: {price}</div>
									<div>Сумма: {price * count}</div>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</>
	)
}

export default CartCard

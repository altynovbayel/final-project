import React from 'react'
import c from './CartCards.module.scss'
import { useNavigate } from 'react-router-dom'
import useIsLogin from '../../hooks/useIsLogin'
import { AiOutlineStar, AiTwotoneDelete } from 'react-icons/ai'
import useAlert from '../../hooks/useAlert'
import {changeCount, getSingleFromCart, removeCart, updatePrfile } from '../../configs'



function CartCard({ productList, setProductList, getCard }) {
	const navigate = useNavigate()
	const { isAuth } = useIsLogin()
	const { actions } = useAlert()
	const [totalPrice, setTotalPrice] = React.useState(0)
  const [priceMonitoring, setPriceMonitoring] = React.useState(null)


  React.useEffect(() => {
    productList.map(item => {
      setTotalPrice(prev => prev += item.price * item.count)
    })
  }, [priceMonitoring])

 
 React.useEffect(() => {
  const newValue = {
    totalPrice
  } 
  updatePrfile(isAuth?.uid, newValue).then(r => r)
 }, [totalPrice])
 
	function countIncrement(id) {
    getSingleFromCart(id, isAuth?.uid).then((r) => {
      changeCount(isAuth?.uid, id, { count: r.data.count + 1 })
    })
	}

	function countDecrement(id) {
    getSingleFromCart(id, isAuth?.uid).then((r) => {
      changeCount(isAuth?.uid, id, { count: r.data.count - 1 })
    })
	}

	function handleRemoveCard(id) {
		actions.sweetAlert('Удалено из корзины')
		removeCart(isAuth.uid, id).then((r) => r && getCard())

    productList.filter(item => item.id === id && setTotalPrice(prev => prev - (item.price * item.count)))
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
								<img src={images[0]} alt='img' />
							</div>
							<div className={c.card_body}>
								<div className={c.name}>
									{productName.split('').length > 20
										? `${productName.split('').slice(0, 16).join('')}...`
										: productName}
									<div className={c.del}>
										<AiTwotoneDelete onClick={() => handleRemoveCard(id)} />
									</div>
								</div>
								<div className={c.price}>
									{reviewGrade} <AiOutlineStar />
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
									<div className={c.price}>price: {price}</div>
									<div>total: {price * count}</div>
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

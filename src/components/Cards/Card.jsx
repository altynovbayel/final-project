import React from 'react'
import c from './Card.module.scss'
import Button from '../UI/Button'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import useIsLogin from '../../hooks/useIsLogin'
import {addToCart, addToFavorites, getAllProducts, getSingleFromCart, removeToFavorites} from '../../configs'
import useAlert from '../../hooks/useAlert'
import CardButton from "../CardButton/CardButton";

function Card({ productList, setProductList}) {
	const navigate = useNavigate()
	const [isInCart, setIsInCart] = React.useState(false)
	const { isAuth } = useIsLogin()
	const { setTotalPages } = useIsLogin()
	const { actions } = useAlert()

	React.useEffect(() => {
	}, [])

	const handleGoToShoppingCart = (id) => {
		const cart = productList.find((product) => product.id === id)
		cart && actions.sweetAlert('Добавлено в корзину')
		addToCart(cart, isAuth.uid, id).then(() => {
			const newData = productList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						inCart: !item.inCart,
					}
				}
				return item
			})
			setTotalPages(item => !item)
			setProductList(newData)
		})
			.then(() => {
				getAllProducts().then(r => {
					const newData = Object.entries(r.data).map(([id, item]) => {
						return {
							id,
							...item
						}
					})
					setProductList(newData)
				})
			})
	}

	function countIncrement(id) {
		const arr = productList.map((item) => ({
			...item,
			count: item.id === id ? item.count + 1 : item.count,
		}))
		setProductList(arr)
	}

	function countDecrement(id) {
		const arr = productList.map((item) => {
			return {
				...item,
				count: item.id === id ? item.count - 1 : item.count,
			}
		})
		setProductList(arr)
	}

	function setLike(id) {
		const array = productList.map((item) => {
			return {
				...item,
				favorite: item.id === id ? !item.favorite : item.favorite,
			}
		})
		setProductList(array)
	}

	const addToFavoriteHandle = (id) => {
		!isAuth && navigate('/user/auth')
		const favoriteProduct = productList.find((item) => item.id === id)
		addToFavorites(favoriteProduct, isAuth?.uid, id).then()
	}

	const removeFromFavorites = (id) => {
		removeToFavorites(isAuth?.uid, id).then()
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
						favorite,
					}) => (
						<div key={id} className={c.card}>
							<div
								className={c.card_img}
								onClick={() => navigate(`/products/${category}/${id}`)}
							>
								<img src={images[0]} alt='img' />
							</div>
							<div className={c.card_body}>
								<div className={c.text}>
									<div
										className={c.text_content}
										onClick={() => navigate(`/products/${category}/${id}`)}
									>
										<h3>{
											productName.length >= 20 ? `${productName.slice(0 , 17)}...` : productName
										}</h3>
										<h4>{price} som</h4>
									</div>
									<div className={c.like}>
										{!favorite ? (
											<MdFavoriteBorder
												onClick={() => {
													addToFavoriteHandle(id)
													setLike(id)
												}}
											/>
										) : (
											<MdFavorite
												onClick={() => {
													removeFromFavorites(id)
													setLike(id)
												}}
											/>
										)}
									</div>
								</div>
								<div className={c.btns}>
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
									<CardButton
										productBase={productList}
										handleGoToShoppingCart={handleGoToShoppingCart}
										productId={id}
									/>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</>
	)
}

export default Card

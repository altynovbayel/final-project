import React from 'react'
import c from './Card.module.scss'
import Button from '../UI/Button'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


function Card({productList, setProductList}) {
	const navigate = useNavigate()


	function countIncrement(id) {
		const arr = productList.map((item) => {
			return {
				...item,
				count: item.id === id ? item.count + 1 : item.count,
			}
		})
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
						 type,
						 category,
						 favorite,
					 }) => (
						<div key={id} className={c.card}>
							<span className={c.type}>{type}</span>
							<div
								className={c.card_img}
								onClick={() => navigate(`/products/${category}/${id}`)}
							>
								<img src={images[0]} alt='img'/>
							</div>
							<div className={c.card_body}>
								<div className={c.text}>
									<div
										className={c.text_content}
										onClick={() => navigate(`/products/${category}/${id}`)}
									>
										<h3 className={c.productName}>{productName}</h3>
										<h4>{price} som</h4>
									</div>
									<div className={c.like}>
										{!favorite ? (
											<MdFavoriteBorder onClick={() => setLike(id)}/>
										) : (
											<MdFavorite onClick={() => setLike(id)}/>
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
									<Button buttonText='В корзину'/>
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

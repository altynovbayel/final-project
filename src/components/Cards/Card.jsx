import React from 'react'
import c from './Card.module.scss'
import Button from '../UI/Button'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Card({ productList, dataBaseStart }) {
	const navigate = useNavigate()
	const [data, setData] = React.useState(productList)
	React.useEffect(() => {
		setData(productList)
	}, [productList])

	function countIncrement(id) {
		const arr = data.map((item) => {
			return {
				...item,
				count: item.id === id ? item.count + 1 : item.count,
			}
		})
		setData(arr)
	}
	function counDecrement(id) {
		const arr = data.map((item) => {
			return {
				...item,
				count: item.id === id ? item.count - 1 : item.count,
			}
		})
		setData(arr)
	}
	function setLike(id) {
		const array = data.map((item) => {
			return {
				...item,
				favorite: item.id === id ? !item.favorite : item.favorite,
			}
		})
		setData(array)
	}
	return (
		<>
			<div className={c.container}>
				{data.map(
					({
						productImg,
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
								<img src={productImg[0]} alt='img' />
							</div>
							<div className={c.card_body}>
								<div className={c.text}>
									<div>
										<h3>{productName}</h3>
										<h4>{price} som</h4>
									</div>
									<div className={c.like}>
										{!favorite ? (
											<MdFavoriteBorder onClick={() => setLike(id)} />
										) : (
											<MdFavorite onClick={() => setLike(id)} />
										)}
									</div>
								</div>
								<div className={c.btns}>
									<div className={c.counter}>
										<button
											onClick={() => counDecrement(id)}
											disabled={count === 0}
										>
											-
										</button>
										<span>{count}</span>
										<button onClick={() => countIncrement(id)}>+</button>
									</div>
									<Button buttonText='В корзину' />
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

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import c from './more.module.scss'
import {MdCopyright, MdOutlineFavoriteBorder} from 'react-icons/md'
import SliderDots from '../../components/Slider/sliderDots'
import SliderButtons from '../../components/Slider/SliderBtn/SliderButtons'
import MoreDesc from './Description/MoreDesc'
import Button from '../../components/UI/Button'
import Reviewer from './Reviewer/Reviewer'
import {
	addReview,
	getAllProducts, getSingleProduct,
	getUser,
	putAddedReview,
	updateProfile,
} from '../../configs'
import useCards from '../../hooks/useCards'
import useIsLogin from '../../hooks/useIsLogin'
import Loader from '../Favorites/Loader/Loader'
import { GoStar } from 'react-icons/go'

function More() {
	const { id } = useParams()
	const { isAuth } = useIsLogin()
	const { actions} = useCards()
	const navigate = useNavigate()
	const [moreData, setMoreData] = React.useState(null)
	const [reviewersData, setReviewersData] = React.useState(null)
	const [indexImg, setIndexImg] = React.useState(1)
	const [count, setCount] = React.useState(1)
	const [price, setPrice] = React.useState(null)
	const [totalPrice, setTotalPrice] = React.useState(0)
	const [reviewContent, setReviewContent] = React.useState('')
	const [currentStarValue, setCurrentStarValue] = React.useState(0)
	const [hoverValue, setHoverValue] = React.useState(undefined)

	const handleClick = (value) => setCurrentStarValue(value)
	const handleMouseOver = (value) => setHoverValue(value)
	const handleMouseLeave = () => setHoverValue(undefined)

	const addReviewHandle = () => {
		const data = {
			date: new Date().toLocaleString(),
			content: reviewContent,
			reviewGrade: currentStarValue,
			user: {
				username: isAuth.displayName,
				email: isAuth.email,
			},
		}
		addReview(data, id).then((r) => {
			if (r.data) {
				const personReviewData = {
					reviewContent: data.content,
					reviewGrade: currentStarValue,
					date: data.date,
					productName: moreData.productName,
					productId: id,
					productCategory: moreData.category,
					images: moreData.images,
				}
				putAddedReview(personReviewData, isAuth.uid).then(() => {
					setCurrentStarValue(0)
					setHoverValue(undefined)
					setReviewContent('')
				})
			}
		})
	}

	React.useEffect(() => {
		getSingleProduct(id).then(r => {
			if (r) {
				setMoreData(r.data)
				r.data.reviewers && (
					setReviewersData(() => {
						return Object.entries(r.data.reviewers).map(([id, item]) => {
							return {
								id,
								...item
							}
						})
					})
				)
			}
		})
	}, [id])

	const handleIncrement = () => {
		setCount(prev => prev + 1)
		setTotalPrice(() => count * price)
		const newData = {
			...moreData,
			count
		}
		setMoreData(newData)
		console.log(moreData)
	}

	const handleDecrement = () => {
		setCount((prev) => prev - 1)
	}

	const nextSlide = () => {
		setIndexImg((prev) => prev + 1)
		indexImg === moreData.productImg.length && setIndexImg(1)
	}

	const prevSlide = () => {
		setIndexImg((prev) => prev - 1)
		indexImg === 1 && setIndexImg(moreData.productImg.length)
	}

	const handleOrderProduct = () => {
		console.log(moreData)
	}

	console.log(moreData)
	if (!moreData)
		return (
			<div className={c.loading}>
				<Loader />
			</div>
		)

	return (
		<React.Fragment>
			<div className={c.container}>
				<div className={c.slider}>
					<div className={c.slider_img}>
						{moreData.images.map((url, i) => (
							<img
								className={indexImg === i + 1 ? c.imagesActive : c.images}
								key={i}
								src={url}
								alt='slider'
							/>
						))}
						<SliderButtons next={nextSlide} prev={prevSlide} />
					</div>
					<div className={c.dots}>
						<SliderDots
							state={indexImg}
							setState={setIndexImg}
							list={moreData.images}
						/>
					</div>
				</div>
				<div className={c.content}>
					<div className={c.likedBtn}>
						<MdOutlineFavoriteBorder />
						<p>Add to favorites</p>
					</div>
					<h1>{moreData.productName}</h1>
					<div className={c.counter}>
						<div className={c.count}>
							<button onClick={handleDecrement} disabled={count === 0}>
								-
							</button>
							<span>{count}</span>
							<button onClick={handleIncrement}>+</button>
						</div>
						<div className={c.priceContainer}>
							<h2 className={c.price}>{moreData.price} сом</h2>
						</div>
					</div>
					<div className={c.btn}>
						<span>
							средняя оценка:
							<h4> {moreData.reviewGrade}</h4>
						</span>
						<Button buttonText={'Заказать'} onClick={handleOrderProduct} />

					</div>
					<label>
						<span className={c.total}>Сумма: {totalPrice}</span>
					</label>
					<div className={c.description}>
						<MoreDesc text={moreData.description} />
					</div>
				</div>
			</div>
			<div className={c.addReview}>
				<div className={c.stars}>
					<span>Оставьте отзыв: </span>
					<div>
						{Array(5)
							.fill(0)
							.map((_, i) => {
								return (
									<GoStar
										key={i}
										className={c.starIcon}
										color={
											(hoverValue || currentStarValue) > i
												? '#ffba5a'
												: '#a9a9a9'
										}
										onClick={() => handleClick(i + 1)}
										onMouseOver={() => handleMouseOver(i + 1)}
										onMouseLeave={() => handleMouseLeave()}
									/>
								)
							})}
					</div>
				</div>
				<div className={c.reviewContent}>
					<textarea
						value={reviewContent}
						placeholder={'Напишите что-нибудь...'}
						onChange={(e) => setReviewContent(e.target.value)}
						type='text'
					/>
					<button onClick={addReviewHandle}>Отправить</button>
				</div>
			</div>
			<div className={c.reviewers}>
				{reviewersData ? (
					reviewersData
						.map((item, index) => (
							<Reviewer
								key={index}
								reviewGrade={item.reviewGrade}
								name={item.user.username}
								date={item.date}
								content={item.content}
							/>
						))
				) : (
					<h1>no reviews</h1>
				)}
			</div>
		</React.Fragment>
	)
}

export default More

// const getData = React.useCallback(() => {
// 	actions.getSingle(id).then(({ data }) => {
// 		data.reviewers &&
// 			setReviewersData(() => {
// 				return Object.entries(data.reviewers).map(([id, item]) => {
// 					return {
// 						id,
// 						...item,
// 					}
// 				})
// 			})
// 		setMoreData(() => {
// 			return {
// 				...data,
// 				reviewersData,
// 			}
// 		})
// 	})
// }, [actions, id, reviewersData])

// React.useEffect(() => {
// 	getData()
// 	console.log(moreData)
// 	// setCount(data.count)
// 	// setPrice(data.price)
// 	// setTotalPrice(data.price)
// }, [])

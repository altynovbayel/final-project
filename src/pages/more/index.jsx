import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import c from './more.module.scss'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import MoreDesc from './Description/MoreDesc'
import Reviewer from './Reviewer/Reviewer'
import {addReview, addToCart, getSingleProduct, postReviewProduct, putAddedReview,} from '../../configs'
import useCards from '../../hooks/useCards'
import useIsLogin from '../../hooks/useIsLogin'
import Loader from '../../components/Loader/Loader'
import {GoStar} from 'react-icons/go'
import EmptyData from "../../components/UI/EmptyData/EmptyData";
import useAlert from "../../hooks/useAlert";
import CartMoreButton from "./CartMoreButton/CartMoreButton";
import LikeMoreButton from "./LikeMoreButton/LikeMoreButton";

function More() {
	const {id} = useParams()
	const {isAuth} = useIsLogin()
	const {actions} = useCards()
	const {actions: alertActions} = useAlert()
	const navigate = useNavigate()
	const [loading, setLoading] = React.useState(false)
	const [moreData, setMoreData] = React.useState(null)
	const [reviewersData, setReviewersData] = React.useState(null)
	const [quantity, setQuantity] = React.useState(1)
	const [reviewContent, setReviewContent] = React.useState('')
	const [currentStarValue, setCurrentStarValue] = React.useState(0)
	const [hoverValue, setHoverValue] = React.useState(undefined)

	const handleClick = (value) => setCurrentStarValue(value)
	const handleMouseOver = (value) => setHoverValue(value)
	const handleMouseLeave = () => setHoverValue(undefined)

	const getProduct = () => {
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
	}

	const addReviewHandle = () => {
		setLoading(true)
		const data = {
			date: new Date().toLocaleString(),
			content: reviewContent,
			reviewGrade: currentStarValue,
			user: {
				profileImg: isAuth.photoURL,
				username: isAuth.displayName,
				email: isAuth.email,
			},
		}

		addReview(data, id, isAuth?.uid).then((r) => {
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
				putAddedReview(personReviewData, isAuth.uid)
					.then(() => {
						getProduct()
						setCurrentStarValue(0)
						setHoverValue(undefined)
						setReviewContent('')
						setLoading(false)
					})
			}
		})
			.then(() => {
				if (reviewersData) {
					const middleReview = reviewersData.reduce((total, item) => total + item.reviewGrade, 0) / reviewersData.length
					postReviewProduct(id, {reviewGrade: middleReview.toFixed(1)}).then(() => getProduct())
				} else {
					postReviewProduct(id, {reviewGrade: currentStarValue}).then(() => {
						getProduct()
					})
				}
			})
	}


	React.useEffect(() => {
		getProduct()
	}, [id])

	const handleIncrement = () => {
		setQuantity(prev => prev + 1)
		setMoreData(prev => {
			return {
				...prev,
				count: ++prev.count
			}
		})
	}

	const handleDecrement = () => {
		setQuantity((prev) => prev - 1)
		setMoreData(prev => {
			return {
				...prev,
				count: --prev.count
			}
		})

	}
	const handleOrderProduct = () => {
		alertActions.sweetAlert('Добавлено в корзину')
		addToCart(moreData, isAuth.uid, id).then(() => {
			setMoreData(prev => {
				return {
					...prev,
					inCart: !prev.inCart
				}
			})
		})
	}

	if (!moreData)
		return (
			<div className={c.loading}>
				<Loader/>
			</div>
		)
	return (
		<React.Fragment>
			<div className={c.container}>
				<div className={c.slider}>
					<div className={c.slider_img}>
						<img
							className={c.imagesActive}
							src={moreData.images}
							alt='slider'
						/>
					</div>
				</div>
				<div className={c.content}>
					<LikeMoreButton
						productId={id}
						productBase={moreData}
						getProductBase={getProduct}
						setProductBase={setMoreData}
					/>
					<h1>{moreData.productName}</h1>
					<div className={c.counter}>
						<div className={c.count}>
							<button
								onClick={handleDecrement}
								disabled={quantity === 1}
							>
								-
							</button>
							<span>{quantity}</span>
							<button onClick={handleIncrement}> +</button>
						</div>
						<div className={c.priceContainer}>
							<h2 className={c.price}>{moreData.price} сом</h2>
						</div>
					</div>
					<div className={c.btn}>
						{
							moreData.reviewGrade === 'null' ? (
								<span></span>
							) : (
								<span>
									Средняя оценка:
									<h4> {moreData.reviewGrade}</h4>
								</span>
							)
						}
						<CartMoreButton
							handleOrderProduct={handleOrderProduct}
							productId={id}
							productData={moreData}
						/>
					</div>
					<label className={c.total}>
						<span>Сумма: {quantity * moreData.price}</span>
					</label>
					<div className={c.description}>
						<MoreDesc text={moreData.description}/>
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
					<button
						disabled={loading}
						onClick={() => {
						isAuth ? addReviewHandle() : navigate('/user/auth')
					}}>Отправить
					</button>
				</div>
			</div>
			<div className={c.reviewers}>
				{reviewersData ? (
					reviewersData.map((item, index) => (
						<Reviewer
							key={index}
							reviewerImg={item.user.profileImg}
							reviewGrade={item.reviewGrade}
							name={item.user.username}
							date={item.date}
							content={item.content}
						/>
					))
				) : <EmptyData text={'Пока нет отзывов'}/>}
			</div>
		</React.Fragment>
	)
}

export default More

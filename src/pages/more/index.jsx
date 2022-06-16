import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import c from './more.module.scss'
import {MdOutlineFavoriteBorder} from "react-icons/md";
import SliderDots from "../../components/Slider/sliderDots";
import SliderButtons from "../../components/Slider/SliderBtn/SliderButtons";
import MoreDesc from './Description/MoreDesc';
import Button from '../../components/UI/Button'
import Reviewer from './Reviewer/Reviewer';
import {getAllProducts} from "../../configs";
import useCards from "../../hooks/useCards";
import useIsLogin from "../../hooks/useIsLogin";
import Loader from "../Favorites/Loader/Loader";

function More() {
	const {id} = useParams()
	const {isAuth} = useIsLogin()
	const navigate = useNavigate()
	const [moreData, setMoreData] = React.useState(null)
	const {actions} = useCards()
	console.log(moreData)

	const [indexImg, setIndexImg] = React.useState(1)
	const [count, setCount] = React.useState(1)
	const [price, setPrice] = React.useState(null)
	const [totalPrice, setTotalPrice] = React.useState(null)

	React.useEffect(() => {
		actions.getSingle(id).then(({data}) => {
			setMoreData(data)
			// setCount(data.count)
			setPrice(data.price)
			setTotalPrice(data.price)
		})
	}, [])

	const handleChangePrice = () => {
		setTotalPrice(prev => price * count)
	}

	const handleIncrement = () => {
		setCount(prev => prev + 1)
		handleChangePrice()
	}

	const handleDecrement = () => {
		setCount(prev => prev - 1)
		handleChangePrice()
	}

	const nextSlide = () => {
		setIndexImg(prev => prev + 1)
		indexImg === moreData.productImg.length && setIndexImg(1)
	}

	const prevSlide = () => {
		setIndexImg(prev => prev - 1)
		indexImg === 1 && setIndexImg(moreData.productImg.length)
	}

	if (!moreData) return <div className={c.loading}><Loader/></div>
	return (
		<React.Fragment>
			<div className={c.container}>
				<div className={c.slider}>
					<div className={c.slider_img}>
						{
							moreData.images.map((url, i) =>
								<img
									className={indexImg === i + 1 ? c.imagesActive : c.images}
									key={i}
									src={url}
									alt="slider"
								/>)
						}
						<SliderButtons next={nextSlide} prev={prevSlide}/>
					</div>
					<div className={c.dots}>
						<SliderDots state={indexImg} setState={setIndexImg} list={moreData.images}/>
					</div>
				</div>
				<div className={c.content}>
					<div className={c.likedBtn}>
						<MdOutlineFavoriteBorder/>
						<p>Add to favorites</p>
					</div>
					<h1>{moreData.productName}</h1>
					<div className={c.counter}>
						<div className={c.count}>
							<button
								onClick={handleDecrement}
								disabled={count === 0}
							>
								-
							</button>
							<span>{count}</span>
							<button onClick={handleIncrement}> +</button>
						</div>
						<div>
							<h2>{totalPrice} сом</h2>
						</div>
					</div>
					<div className={c.btn}>
            <span>
              средняя оценка:
              <h4> {moreData.reviewGrade}</h4>
            </span>
						<Button buttonText={'Заказать'}/>
					</div>
					<div className={c.description}>
						<MoreDesc text={moreData.description}/>
					</div>
				</div>
			</div>

			<div className={c.reviewers}>
				{
					moreData.reviewers ? moreData.reviewers.map((item, index) => (
						<Reviewer
							key={index}
							name={item.personName}
							date={item.date}
							content={item.content}/>
					)) : (<h1>no reviews</h1>)
				}
			</div>
		</React.Fragment>
	);
}

export default More;
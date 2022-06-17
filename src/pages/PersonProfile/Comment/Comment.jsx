import React from 'react'
import cs from './Comment.module.scss'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../../configs'
import useIsLogin from '../../../hooks/useIsLogin'
import Loader from '../../Favorites/Loader/Loader'

const Comment = () => {
	const { isAuth } = useIsLogin()
	const navigate = useNavigate()
	const [dataBase, setDataBase] = React.useState(null)

	React.useEffect(() => {
		getUser(isAuth.uid).then((res) => {
			const base = Object.entries(res.data.reviews).map(([id, items]) => {
				return {
					id,
					...items,
				}
			})
			setDataBase(base)
		})
	}, [])

	if (!dataBase) return <Loader />

	return (
		<>
			<h1 className={cs.logo}>Ваши комментарии</h1>
			<div className={cs.container}>
				{dataBase.map((item) => (
					<div className={cs.cards} key={item.id}>
						<div className={cs.cards_header}>
							<img src={item.images[0]} alt='' />
						</div>
						<div className={cs.cards_body}>
							<div className={cs.cards_body_header}>
								<p>{item.productName}</p>
								{/*<p>{item.date}</p>*/}
							</div>
							<div className={cs.text}>
								<p>
									{item.text
										? item.text.length > 70
											? `${item.text.split('').slice(0, 70).join('')}...`
											: item.text
										: 'нету'}
								</p>
							</div>
							<div className={cs.cards_body_footer}>
								<button
									onClick={() => navigate(`products/:category/:productId`)}
								>
									<p className={cs.link}>more</p>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Comment

//navigate() - изменить

// {
//   "id": "-N4XVV1oS1Qv51ZCiqAs",
//   "category": "bakery",
//   "categoryTitle": "Мучное",
//   "count": 1,
//   "description": "Ингредиенты\n250 г ржаной муки,\n250 г пшеничной муки,\n1 ч.л. соли,\n1 ст.л. сахара,\n1 полная чайная ложка сухих дрожжей,\n350 мл теплой кипяченой воды.\n2 ст.л. растительного масла,\nКунжутное семя, тмин, кумин, кориандр.\n(Соотношение круп может быль любым, главное пшеничной муки не менее 50%, а остальные 50% можно заменить ржаной, рисовой, кукурузной мукой или овсяными хлопьями).",
//   "favorite": true,
//   "images": [
//   "https://www.makfa.ru/upload/iblock/a85/a85edeb6ba8972341c8244e404a29777.jpg"
// ],
//   "price": "150",
//   "productName": "хлеб ржаной",
//   "reviewCount": 0,
//   "reviewGrade": 5
// }

import React from 'react'
import cs from './Comment.module.scss'
import { useNavigate } from 'react-router-dom'
import {getUser, removeCommentFromProduct, RemoveComments} from '../../../configs'
import useIsLogin from '../../../hooks/useIsLogin'
import Start from './Start'
import EmptyData from '../../../components/UI/EmptyData/EmptyData'
import useAlert from "../../../hooks/useAlert";

const Comment = () => {
	const { isAuth } = useIsLogin()
	const navigate = useNavigate()
	const [dataBase, setDataBase] = React.useState(null)
	const {actions} = useAlert()

	React.useEffect(() => dataComments(), [])

	function dataComments() {
		getUser(isAuth.uid).then((res) => {
			if (res.data?.reviews) {
				const base = Object.entries(res.data?.reviews).map(([id, items]) => {
					return {
						id,
						...items,
					}
				})
				setDataBase(base)
			} else {
				setDataBase(null)
			}
		})
	}

	function removeComments(id) {
		RemoveComments(isAuth.uid, id).then((res) => res && dataComments())
			.then(() => {
				actions.sweetAlert('Удалено ')
			})
			.then(() => removeCommentFromProduct(isAuth?.uid, id))
	}


	if (!dataBase) return <EmptyData text={'Нет отзывов'} />
	return (
		<>
			<h1 className={cs.logo}>Ваши комментарии</h1>
			<div className={cs.container}>
				{dataBase &&
					dataBase.map((item) => (
						<div className={cs.cards} key={item.id}>
							<div className={cs.cards_header}>
								<img src={item.images[0]} alt='card image'/>
							</div>
							<div className={cs.cards_body}>
								<div className={cs.cards_body_header}>
									<h1 className={cs.title}>
										{item.productName.length > 20
											? `${item.productName.split('').slice(0, 17).join('')}...`
											: item.productName}
									</h1>
									<div className={cs.star}>
										<div>{<Start items={item.reviewGrade} cs={cs} />}</div>
										<span className={cs.date}>{item.date.slice(0, 10)}</span>
									</div>
								</div>
								<div className={cs.text}>
									<p>
										{item.reviewContent.length > 60
											? `${item.reviewContent
													.split('')
													.slice(0, 60)
													.join('')}...`
											: item.reviewContent}
									</p>
								</div>
								<div className={cs.cards_body_footer}>
									<button
										className={cs.left}
										onClick={() =>
											navigate(
												`/products/${item.productCategory}/${item.productId}`
											)
										}
									>
										<p className={cs.link}>читать</p>
									</button>
									<button
										className={cs.delete}
										onClick={() => removeComments(item.id)}
									>
										удалить
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

import React from 'react'
import c from '../more.module.scss'
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md'
import {
	addToFavorites,
	getSingleFavorite,
	removeToFavorites,
} from '../../../configs'
import useIsLogin from '../../../hooks/useIsLogin'
import useCards from '../../../hooks/useCards'
import useAlert from '../../../hooks/useAlert'

const LikeMoreButton = ({
	productId,
	productBase,
	getProductBase,
	setProductBase,
}) => {
	const [isLike, setIsLike] = React.useState(false)
	const { isAuth } = useIsLogin()
	const { actions } = useCards()
	const {
		actions: { sweetAlert },
	} = useAlert()

	React.useEffect(() => {
		getSingleFavorite(isAuth?.uid, productId).then((r) => {
			r.data ? setIsLike(true) : setIsLike(false)
		})
	}, [isAuth?.uid, productId, productBase, actions])

	const addToFavoriteHandle = () => {
		sweetAlert('Добавлено в избранное')
		addToFavorites(productBase, isAuth?.uid, productId).then(() => {
			setProductBase((prev) => {
				return {
					...prev,
					favorite: true,
				}
			})
		})
	}

	const removeFromFavoritesHandle = () => {
		sweetAlert('Удалено из избранных')
		removeToFavorites(isAuth?.uid, productId).then(() => {
			setProductBase((prev) => {
				return {
					...prev,
					favorite: false,
				}
			})
		})
	}

	return (
		<div className={c.likedBtn}>
			{!isLike ? (
				<span
					onClick={addToFavoriteHandle}
					style={{ display: 'flex', gap: '0.6rem' }}
				>
					<MdOutlineFavoriteBorder style={{ fontSize: 22 }} />
					<p>Добавить в избранное</p>
				</span>
			) : (
				<span
					onClick={removeFromFavoritesHandle}
					style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}
				>
					<MdFavorite style={{ color: '#e05353', fontSize: 22 }} />
					<p>В избранном</p>
				</span>
			)}
		</div>
	)
}

export default LikeMoreButton

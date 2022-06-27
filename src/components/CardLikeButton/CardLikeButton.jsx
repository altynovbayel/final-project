import React from 'react';
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {getSingleFavorite} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";

const CardLikeButton = (
	{
		productId,
		setLike,
		productList,
		addToFavoriteHandle,
		removeFromFavorites
	}) => {
	const {isAuth} = useIsLogin()
	const [isFavorite, setIsFavorite] = React.useState(false)
	React.useEffect(() => {
		getSingleFavorite(isAuth?.uid, productId).then(r => {
			if (r.data){
				setIsFavorite(true)
			}
		})
	}, [isAuth?.uid, productId, productList])

	return (
		<>
			{!isFavorite ? (
				<MdFavoriteBorder
					onClick={() => {
						setLike(productId)
						addToFavoriteHandle(productId)
					}}
				/>
			) : (
				<MdFavorite
					onClick={() => {
						setLike(productId)
						removeFromFavorites(productId)
					}}
				/>
			)}
		</>
	);
};

export default CardLikeButton;

import React from 'react'
import cs from './Favorites.module.scss'
import Card from '../../components/Cards/Card'
import Loader from './Loader/Loader'
import {getAllProducts} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";

const Favorites = () => {
	const [dataBase , setDataBase ] = React.useState(null)
	const {isAuth} = useIsLogin()

	React.useEffect(() => {
		getAllProducts(isAuth)
			.then(res => {
				const base = Object.entries(res.data).map(([id , items]) => {
					return {
						id ,
						...items
					}
				})
				setDataBase(base)
			})

		const base = dataBase.map(item => item).filter((item) => item.favorite)
		console.log(base)
	} , [])

	// React.useEffect(() => {
	// 	console.log(dataBase)
	// 	console.log(base)
	// }, [dataBase])

	// if (!product)
	// 	return (
	// 		<>
	// 			<h1 className={cs.favorites_text}>Пусто</h1>
	// 			<div className={cs.container}>
	// 				<Loader />
	// 			</div>
	// 		</>
	// 	)

	return (
		<React.Fragment>
			<h1 className={cs.favorites_text}>Избранное</h1>
			<div className={cs.favorites}>
				{/*{product && <Card productList={product} />}*/}
			</div>
		</React.Fragment>
	)
}

export default Favorites

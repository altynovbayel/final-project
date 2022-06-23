import React from 'react'
import cs from './Favorites.module.scss'
import Card from '../../components/Cards/Card'
import Loader from './Loader/Loader'
import { getAllProducts, getUser } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'

const Favorites = () => {
	const [dataBase, setDataBase] = React.useState(null)
	const { isAuth } = useIsLogin()

	React.useEffect(() => {
		getUser(isAuth?.uid)
			.then((res) => res.data.favorites)
			.then((res) => {
				const base = Object.entries(res).map(([id, item]) => {
					return {
						id,
						...item,
					}
				})
				setDataBase(base)
			})
	}, [isAuth?.uid])
	console.log(dataBase)

	if (!dataBase)
		return (
			<>
				<h1 className={cs.favorites_text}>Пусто</h1>
				<div className={cs.container}>
					<Loader />
				</div>
			</>
		)

	return (
		<React.Fragment>
			<h1 className={cs.favorites_text}>Избранное</h1>
			<div className={cs.favorites}>
				{dataBase && (
					<Card productList={dataBase} setProductList={setDataBase} />
				)}
			</div>
		</React.Fragment>
	)
}

export default Favorites

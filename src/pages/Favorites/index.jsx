import React from 'react'
import cs from './Favorites.module.scss'
import Card from '../../components/Cards/Card'
import Loader from './Loader/Loader'
import { getAllProducts, getUser } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'
import EmptyData from '../../components/UI/EmptyData/EmptyData'

const Favorites = () => {
	const [dataBase, setDataBase] = React.useState(null)
	const { isAuth } = useIsLogin()

	React.useEffect(() => {
		getUser(isAuth?.uid)
			.then((res) => res.data.favorites)
			.then((res) => {
				const base = res
					? Object.entries(res).map(([id, item]) => {
							return {
								id,
								...item,
							}
					  })
					: false
				setDataBase(base)
			})
	}, [isAuth?.uid])

	if (dataBase === false) return <EmptyData text={'У вас нет избранных'} />
	if (!dataBase)
		return (
			<div className={cs.container}>
				<Loader />
			</div>
		)
	return (
		<React.Fragment>
			<h1 className={cs.favorites_text}>Избранное</h1>
			<div className={cs.favorites}>
				{dataBase && (
					<Card
						productList={dataBase}
						setProductList={setDataBase}
						page='favorites'
					/>
				)}
			</div>
		</React.Fragment>
	)
}

export default Favorites

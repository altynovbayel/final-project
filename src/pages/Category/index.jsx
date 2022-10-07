import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import cls from '../Main/main.module.scss'

import Card from '../../components/Cards/Card'
import { getAllProducts } from '../../configs'

const Category = () => {
	const { category } = useParams()
	const [productBase, setProductBase] = React.useState(null)

	const getProducts = React.useCallback(() => {
		getAllProducts().then((r) => {
			if (r) {
				const newData = Object.entries(r.data)
					.map(([id, item]) => {
						return {
							id,
							...item,
						}
					})
					.filter((product) => product.category === category)
				setProductBase(newData)
			}
		})
	}, [category])
	React.useEffect(() => {
		getProducts()
	}, [getProducts])

	if (!productBase)
		return (
			<div className={cls.loading}>
				<Loader />
			</div>
		)
	if (productBase?.length === 0) return <h1>No products</h1>
	return (
		<div>
			<Card
				productList={productBase}
				setProductList={setProductBase}
				page='category'
			/>
		</div>
	)
}

export default Category

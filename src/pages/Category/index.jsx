import React from 'react'
import {useParams} from 'react-router-dom'

import Card from '../../components/Cards/Card'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'
import {getAllProducts} from "../../configs";

const Category = () => {
	const {category} = useParams()
	const [productBase, setProductBase] = React.useState(null)

	const getProducts = React.useCallback(() => {
		getAllProducts().then(r => {
			if (r) {
				const newData = Object.entries(r.data).map(([id, item]) => {
					return {
						id,
						...item
					}
				}).filter(product => product.category === category)
				setProductBase(newData)
			}
		})

	}, [category])
	React.useEffect(() => {
		getProducts()
	}, [getProducts])
	console.log(productBase)


	if (!productBase) return <h1>Loading</h1>
	if (productBase?.length === 0) return <h1>No products</h1>
	return (
		<div>
			<UnderNavbar page='Category' />
			<Card productList={productBase} setProductList={setProductBase}/>
		</div>
	)
}

export default Category

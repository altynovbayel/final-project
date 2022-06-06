import React from 'react'
import { useParams } from 'react-router-dom'
import { productList } from '../../utils/List'
import Card from '../../components/Cards/Card'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'

const Category = () => {
	const { category } = useParams()
	const [productBase, setProductBase] = React.useState(null)

	const filterBase = () => {
		if (!category || category === 'all') {
			return productList
		}
		return productList.filter((product) => product.category === category)
	}

	React.useEffect(() => {
		setProductBase(productList)
	}, [])

	const filteredProductList = React.useMemo(filterBase, [category])

	if (!productBase) return <h1>Loading</h1>
	if (productBase?.length === 0) return <h1>No products</h1>
	return (
		<div>
			<UnderNavbar page='Category' />
			<Card productList={filteredProductList} />
		</div>
	)
}

export default Category

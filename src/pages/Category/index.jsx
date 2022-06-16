import React from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../components/Cards/Card'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'

const Category = () => {
	const { category } = useParams()
	const [productBase, setProductBase] = React.useState(null)

	
	React.useEffect(() => {
 
	}, [])

	

	if (!productBase) return <h1>Loading</h1>
	if (productBase?.length === 0) return <h1>No products</h1>
	return (
		<div>
			<UnderNavbar page='Category' />
			<Card />
		</div>
	)
}

export default Category

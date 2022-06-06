import React from 'react';
import {useParams} from "react-router-dom";
import {productList} from "../../utils/List";
import Card from "../../components/Cards/Card";

const Category = () => {
	const {category} = useParams()
	const [productBase, setProductBase] = React.useState(null)

	const filterBase  = ()  => {
		if (!category) {
			return productList
		}
		return productList.filter(product => product.category === category)
	}

	React.useEffect(() => {
		setProductBase(productList)
	}, [])

	const filteredProductList = React.useMemo(filterBase, [category, productBase])

	console.log(filteredProductList)


	if (!productBase) return <h1>Loading</h1>
	if (productBase?.length === 0) return <h1>No products</h1>
	return (
		<div>

			{
				<Card productList={filteredProductList}/>
			}

		</div>
	);
};

export default Category;

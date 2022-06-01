import React from 'react';
import {useParams} from "react-router-dom";
import {productList} from "../../utils/List";
import Card from "../../components/Cards/Card";

const Category = () => {
	const {category} = useParams()
	const [productBase , setProductBase] = React.useState()

	React.useEffect(() => {
		const base = productList.filter(product => product.category === category)

		setProductBase(base)
	}, [category])

	if(!productBase) return <h1>Loading</h1>
	if(productBase?.length === 0) return <h1>No products</h1>

	return (
		<div>
			{
				<Card productList={productBase}/>
			}
		</div>
	);
};

export default Category;

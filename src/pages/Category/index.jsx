import React from 'react';
import {useParams} from "react-router-dom";
import {ProductList} from "../../utils/List";
import Card from "../../components/Cards/Card";

const Category = () => {
	const {category} = useParams()
  const categoryList = ProductList.filter(item => item.category === category)
	return (
		<div>
      {
        <Card list={categoryList}/>
      }
		</div>
	);
};

export default Category;

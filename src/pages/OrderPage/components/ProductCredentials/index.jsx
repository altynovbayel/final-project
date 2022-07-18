import React from 'react';
import cls from "./ProductCredentials.module.scss";


const ProductCredentials = ({productName, count, totalPriceOfProduct, id}) => {
	return (
		<div className={cls.root}>
			<label className={cls.name}>
				<span>{id}.</span>
				<h5>{
					productName.length > 16 ? productName.slice(0, 17) + '...' : productName
				}</h5>
			</label>
			<label className={cls.numbers}>
				<span className={cls.count}>x {count}</span>
				<span className={cls.price}>{totalPriceOfProduct} c</span>
			</label>
		</div>
	);
};

export default ProductCredentials;

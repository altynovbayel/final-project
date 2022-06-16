import React from 'react';
import {getAllProducts, getSingleProduct} from "../configs";

const useCards = () => {
	const getSingle = React.useCallback((productId) => {
		return getSingleProduct(productId)
	}, [])

	const getAll = React.useCallback(() => {
		return getAllProducts()
	}, [])

	return {
		actions: {
			getSingle,
			getAll
		}
	}
};

export default useCards;

import React from 'react'
import { getAllProducts, getSingleProduct } from '../configs'

const useCards = (productId) => {
	const [moreData, setMoreData] = React.useState(null)
	const [reviewersData, setReviewersData] = React.useState(null)

	const getSingle = React.useCallback((productId) => {
		getSingleProduct(productId).then(({ data }) => {
			data.reviewers &&
				setReviewersData(() => {
					return Object.entries(data.reviewers).map(([id, item]) => {
						return {
							id,
							...item,
						}
					})
				})
			setMoreData(() => {
				return {
					...data,
					reviewersData,
				}
			})
		})
	}, [])

	React.useEffect(() => {
		getSingle(productId)
	}, [getSingle, productId])

	const getAll = React.useCallback(() => {
		return getAllProducts()
	}, [])

	return {
		moreData,
		actions: {
			getSingle,
			getAll,
		},
	}
}

export default useCards

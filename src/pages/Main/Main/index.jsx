import React from 'react'
import Card from '../../../components/Cards/Card'
import Anchor from "../../../components/Anchor/Anchor";
import Pagination from './Pagination';

function MainBlock({dataMain , setDataMain , page , setPage}) {
	const PAGE_SIZE = 12
	const TOTAL_PAGE = Math.ceil(dataMain?.length / PAGE_SIZE)

	return (
		<div>
			<Card 
				productList={dataMain?.slice(
					(page - 1) * PAGE_SIZE,
					(page - 1) * PAGE_SIZE + PAGE_SIZE
				)}
				setProductList={setDataMain} />
			<Anchor/>
			<Pagination TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage}/>
		</div>
	)
}

export default MainBlock
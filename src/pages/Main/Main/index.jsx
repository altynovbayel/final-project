import React from 'react'
import Card from '../../../components/Cards/Card'
import Anchor from '../../../components/Anchor/Anchor'
import Pagination from './Pagination'
import EmtyData from '../../../components/UI/EmptyData/EmptyData'

function MainBlock({ dataMain, setDataMain, page, setPage }) {
	const [data, setData] = React.useState(dataMain)
	const PAGE_SIZE = 12
	const TOTAL_PAGE = Math.ceil(data?.length / PAGE_SIZE)
	const [base, setBase] = React.useState(null)

	React.useEffect(() => {
		setData(dataMain)
	}, [dataMain])

	React.useEffect(() => {
		update()
	}, [])
	React.useEffect(() => {
		update()
	}, [page, data])

	function update() {
		const base = data?.slice(
			(page - 1) * PAGE_SIZE,
			(page - 1) * PAGE_SIZE + PAGE_SIZE
		)
		setBase(base)
	}

	if (data.length === 0) return <EmtyData text={'Товар не найден'} />

	return (
		<div>
			{base && <Card productList={base} setProductList={setData} page='main' />}
			<Anchor />
			<Pagination TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
		</div>
	)
}

export default MainBlock

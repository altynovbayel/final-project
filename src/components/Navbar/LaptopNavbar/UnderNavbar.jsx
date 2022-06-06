import React from 'react'
import NavbarSelect from '../../UI/NavbarSelect'
import cls from './UnderNavbar.module.scss'
import { BsSearch } from 'react-icons/bs'
import CategorySelect from '../../UI/CategorySelect'
import { useNavigate } from 'react-router-dom'

const UnderNavbar = ({ page }) => {
	const [searchInput, setSearchInput] = React.useState('')
	const navigate = useNavigate()
	const [currentTypeSort, setCurrentTypeSort] = React.useState({
		label: 'Все',
		value: 'all',
		type: 'signs',
	})
	const onChange = (newValue) => setCurrentTypeSort(newValue)
	const handleSort = (type) => {
		// console.log(type)
	}

	React.useEffect(() => {
		currentTypeSort.type === 'signs'
			? handleSort(currentTypeSort.value)
			: navigate(`/products/${currentTypeSort.value}`)
	}, [currentTypeSort])

	return (
		<div className={cls.navbarUnder}>
			<div className={cls.wrapperUnder}>
				<label className={cls.searcher}>
					<input
						type='text'
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder='Найти товар'
					/>
					<button>
						<BsSearch />
					</button>
				</label>
				<label className={cls.select}>
					<p>Сортировать:</p>
					{page === 'Main' ? (
						<NavbarSelect
							currentTypeSort={currentTypeSort}
							onChange={onChange}
						/>
					) : (
						<CategorySelect
							currentTypeSort={currentTypeSort}
							onChange={onChange}
						/>
					)}
				</label>
			</div>
		</div>
	)
}

export default UnderNavbar

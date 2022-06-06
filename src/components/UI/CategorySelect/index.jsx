import React from 'react'
import '../NavbarSelect/NavbarSelect.scss'
import Select from 'react-select'
import { categoryOptions } from '../../../utils/navbarSort'

const CategorySelect = ({ currentCategory, onChange }) => {
	return (
		<div className='navbarSelect'>
			<Select
				classNamePrefix='customSelect'
				value={currentCategory}
				onChange={(newValue) => onChange(newValue)}
				options={categoryOptions}
				isSearchable={false}
			/>
		</div>
	)
}

export default CategorySelect

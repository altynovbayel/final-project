import React from 'react'
import Select from 'react-select'
import { groupedOptions } from '../../../utils/navbarSort'
import formatGroupLabel from './FormatGroupLabel'
import './NavbarSelect.scss'

const NavbarSelect = ({ currentTypeSort, onChange }) => {
	return (
		<div className='navbarSelect'>
			<Select
				classNamePrefix='customSelect'
				value={currentTypeSort}
				onChange={(newValue) => onChange(newValue)}
				options={groupedOptions}
				formatGroupLabel={formatGroupLabel}
				isSearchable={false}
			/>
		</div>
	)
}

export default NavbarSelect

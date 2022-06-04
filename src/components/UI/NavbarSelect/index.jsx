import React from 'react';
import Select from "react-select";
import {groupedOptions} from "../../../utils/navbarSort";
import formatGroupLabel from "./FormatGroupLabel";
import "./NavbarSelect.scss";
import {useNavigate} from "react-router-dom";


const NavbarSelect = () => {
	const [currentTypeSort, setCurrentTypeSort] = React.useState({
		label: 'Все',
		value: 'all',
		type: 'signs'
	})
	const onChange = (newValue) => setCurrentTypeSort(newValue)
	const navigate = useNavigate()
	const handleSort = (type) => {
		// console.log(type)
	}

	console.log(currentTypeSort)
	React.useEffect(() => {

		currentTypeSort.type === 'signs'
			? handleSort(currentTypeSort.type)
			: navigate(`/products/${currentTypeSort.value}`)

	}, [currentTypeSort])

	return (
		<div className='navbarSelect'>
			<Select
				classNamePrefix='customSelect'
				value={currentTypeSort}
				onChange={onChange}
				options={groupedOptions}
				formatGroupLabel={formatGroupLabel}
				isSearchable={false}
			/>
		</div>
	);
};

export default NavbarSelect;

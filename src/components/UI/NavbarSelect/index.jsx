import React from 'react';
import Select from "react-select";
import {groupedOptions, signsOptions} from "../../../utils/navbarSort";
import formatGroupLabel from "./FormatGroupLabel";
import cls from "./NavbarSelect.module.scss";


const NavbarSelect = () => {
	const [currentTypeSort, setCurrentTypeSort] = React.useState('all')

	const onChange = (newValue) => setCurrentTypeSort(newValue.value)

		console.log(currentTypeSort)

	const getValue = () => {
		const options = groupedOptions.reduce((newArr, item) => {
			return [
				...newArr,
				...item.options
			]
		}, [])


		return currentTypeSort ? options.find(type => type.value === currentTypeSort) : ''
	}

	return (
		<div className={cls.navbarSelect}>
			<Select
				value={getValue()}
				onChange={onChange}
				options={groupedOptions}
				formatGroupLabel={formatGroupLabel}
			/>
		</div>
	);
};

export default NavbarSelect;

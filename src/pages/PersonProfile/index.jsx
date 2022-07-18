import React from 'react'
import cs from './PersonProfile.module.scss'
import {useMediaQuery} from "react-responsive";
import SelectDropDown from "./SelectDropDown";
import MobileProfile from './Profile';

const PersonProfile = () => {
	const isMobile = useMediaQuery({query: '(max-width: 767px)'})
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})
 
	return (
		<div className={cs.root}>
			{isMobile && <SelectDropDown />}
			{isLaptop && (<><MobileProfile/></>)}
		</div>
	)
}

export default PersonProfile

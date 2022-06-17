import React from 'react'
import cs from './PersonProfile.module.scss'
import {useMediaQuery} from "react-responsive";
import SelectDropDown from "./SelectDropDown";
import Comment from "./Comment/Comment";
import MobileProfile from './MobileProfil';

const PersonProfile = () => {
	const isMobile = useMediaQuery({query: '(max-width: 767px)'})
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.root}>
			{isMobile && <SelectDropDown />}
			{isLaptop && (<><MobileProfile/> <Comment/></>)}
		</div>
	)
}

export default PersonProfile

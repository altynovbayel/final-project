import React from 'react';
import cs from './PersonProfile.module.scss'
// import {useMediaQuery} from "react-responsive";
import MobileProfile from "./MobileProfil";

const PersonProfile = () => {
	// const isMobile = useMediaQuery({query: '(max-width)'})
	return (
		<div className={cs.root}>
			{
				<MobileProfile/>
			}
		</div>
	);
};

export default PersonProfile;

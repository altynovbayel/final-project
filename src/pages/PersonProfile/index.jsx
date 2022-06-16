import React from 'react';
import cs from './PersonProfile.module.scss'
import {useMediaQuery} from "react-responsive";
import SelectDropDown from "./SelectDropDown";
import MobileProfile from "./Profil/MobileProfil";
import Comment from "./Comment/Comment";

const PersonProfile = () => {
	const isMobile = useMediaQuery({query: '(max-width: 767px)'})
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})
	if(isMobile) return (<div className={cs.root}><SelectDropDown/></div>)
	if(isLaptop) return (<div className={cs.root}><MobileProfile/> <Comment/></div>)
};

export default PersonProfile;

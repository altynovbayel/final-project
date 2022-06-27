import React from 'react';
import {ImFileEmpty} from "react-icons/im";
import c from "./EmptyData.module.scss";


const EmptyData = ({text}) => {
	return (
		<div className={c.empty}>
			<ImFileEmpty/>
			<span>{text}</span>
		</div>
	);
};

export default EmptyData;

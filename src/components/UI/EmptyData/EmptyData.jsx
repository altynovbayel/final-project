import React from 'react';
import {ImFileEmpty} from "react-icons/im";
import c from "./EmptyData.module.scss";


const EmptyData = ({text, style}) => {
	return (
		<div className={c.empty} style={style}>
			<ImFileEmpty/>
			<span>{text}</span>
		</div>
	);
};

export default EmptyData;

import React from 'react';
import {ImFileEmpty} from "react-icons/im";
import c from "./EmptyData.module.scss";


const EmptyData = () => {
	return (
		<div className={c.empty}>
			<ImFileEmpty/>
			<span>Пока нет отзывов</span>
		</div>
	);
};

export default EmptyData;

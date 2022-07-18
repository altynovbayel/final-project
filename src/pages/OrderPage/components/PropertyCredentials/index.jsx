import React from 'react';
import cls from "./PropertyCredentials.module.scss";


const PropertyCredentials = ({property, value, fontWeight, color}) => {
	return (
		<label className={cls.root}>
			<span
				className={cls.key}
				style={{fontWeight: fontWeight, color}}
			>{property}: </span>
			<span
				className={cls.value}
				style={{fontWeight: fontWeight, color}}
			>{value}</span>
		</label>
	);
};

export default PropertyCredentials;

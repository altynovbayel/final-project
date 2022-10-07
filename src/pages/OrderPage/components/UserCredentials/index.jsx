import React from 'react';
import cls from "./UserCredentials.module.scss";


const UserCredentials = ({ property, value}) => {
	return (
		<label className={cls.root}>
			<span className={cls.key}>{property}:</span>
			<span className={cls.value}>{value}</span>
		</label>
	);
};

export default UserCredentials;

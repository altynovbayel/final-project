import React from 'react';
import cls from "./FormatGroupLabel.module.scss";

const FormatGroupLabel = (data) => {
	return (
		<div className={cls.format}>
			<span className={cls.label}>{data.label}</span>
			<span className={cls.length}>{data.options.length}</span>
		</div>
	);
};

export default FormatGroupLabel;

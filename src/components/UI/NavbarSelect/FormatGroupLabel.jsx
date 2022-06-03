import React from 'react';
import cls from "./FormatGroupLabel.module.scss";

const FormatGroupLabel = (data) => {
	return (
		<div className={cls.format}>
			<span>{data.label}</span>
			<span>{data.options.length}</span>
		</div>
	);
};

export default FormatGroupLabel;

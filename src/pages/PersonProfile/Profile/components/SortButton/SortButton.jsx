import React from 'react';
import cls from "./SortButton.module.scss";

const SortButton = ({buttonText, onClick, isActive}) => {
	return (
		<button onClick={onClick} className={isActive ? `${cls.sortButton} ${cls.active}` : cls.sortButton}>
			{buttonText}
		</button>
	);
};

export default SortButton;

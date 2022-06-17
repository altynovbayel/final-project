import React from 'react';
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import cls from './Anchor.module.scss'

const Anchor = () => {
	const scroll = () => {
		window.scroll({
			left: 0,
			top: 620,
			behavior: 'smooth',
		})
	}

	return (
		<BsFillArrowUpCircleFill
			className={cls.anchor}
			onClick={scroll}
		/>
	);
};

export default Anchor;

import React from 'react';
import "./Button.module.scss";


const FormButton = ({buttonText, isValid}) => {
	return (
		<button
			type='submit'
			disabled={!isValid}
		>
			<span>{buttonText}</span>
		</button>
	);
};

export default FormButton;

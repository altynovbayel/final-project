import React from 'react';
import "./FormInput.module.scss";


const FormInput = ({inputType, placeholder, register, registerName, errors}) => {
	return (
		<label>
			<span>{errors}</span>
			<input
				placeholder={placeholder}
				type={inputType}
				{ ...register(registerName, {
					required: '⚠ Обязательное поле',
				})}
			/>
		</label>
	);
};

export default FormInput;

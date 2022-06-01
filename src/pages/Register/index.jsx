import React from 'react';
import {IoMdClose} from "react-icons/io";
import cls from "../Auth/Auth.module.scss";

import FormInput from "../../components/UI/FormInput";
import FormButton from "../../components/UI/FormButton";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: {
			errors, isValid
		},
		reset
	} = useForm({
		mode: 'onChange'
	})

	const handleFormSubmit = (data) => {
		console.log(data)
		reset()
	}

	return (
		<div className={cls.container}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<IoMdClose
					className={cls.closeForm}
					onClick={() => navigate('/')}
				/>
				<div className={cls.formHeader}>
					<h3>Регистрация</h3>
				</div>
				<div className={cls.formBody}>

					<FormInput
						inputType='email'
						placeholder='Ваше email'
						registerName='email'
						register={register}
						errors={errors.email?.message}
					/>

					<FormInput
						inputType='text'
						placeholder='Ваше имя'
						registerName='username'
						register={register}
						errors={errors.username?.message}
					/>
					<FormInput
						inputType='password'
						placeholder='Введите пароль'
						registerName='password'
						register={register}
						errors={errors.password?.message}
					/>
				</div>
				<div className={cls.formFooter}>
					<FormButton
						isValid={isValid}
						buttonText='Создать'
					/>
					<Link to='/user/auth'>Уже есть аккаунт</Link>
				</div>
			</form>
		</div>

	);
};

export default Register;

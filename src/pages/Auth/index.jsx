import React from 'react';
import {useForm} from "react-hook-form";
import cls from "./Auth.module.scss";
import FormInput from "../../components/UI/FormInput";
import FormButton from "../../components/UI/FormButton";
import {IoMdClose} from "react-icons/io";
import {Link, useNavigate} from "react-router-dom";


const Auth = () => {
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

	const navigate = useNavigate()

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
					<h3>Вход в кабинет</h3>
				</div>
				<div className={cls.formBody}>

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
						buttonText='Войти'
					/>
					<Link to='/user/register'>Еще нет аккаунта</Link>
				</div>
			</form>
		</div>
	);
};

export default Auth;

import React from 'react'
import {IoMdClose} from 'react-icons/io'
import cls from '../Auth/Auth.module.scss'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import FormInput from '../../components/UI/FormInput'
import FormButton from '../../components/UI/FormButton'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {auth} from '../../services/firebase/firebase'
import {updateProfile} from "firebase/auth";
import {createNewUser} from "../../configs";


const Register = () => {
	const navigate = useNavigate()
	const [wrongData, setWrongData] = React.useState(false)

	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onChange',
	})

	const handleNewUser = (data, userId) => {
		createNewUser({
			...data,
			phoneNumber: '',
			photo: '',
		}, userId).then(() => navigate('/profile'))
	}

	const handleFormSubmit = async (data) => {
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)
			await updateProfile(res.user, {
				displayName: data.username || 'Пользователь',
			})
			res && handleNewUser(data, res.user.uid)
		} catch (error) {
			setWrongData(true)
		} finally {
			reset()
		}
	}

	return (
		<div className={cls.container}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<IoMdClose className={cls.closeForm} onClick={() => navigate('/')}/>
				<div className={cls.formHeader}>
					<h3>Регистрация</h3>
				</div>
				<div className={cls.formBody}>
					{wrongData && <span>Неправильный email или пароль</span>}
					<FormInput
						inputType='email'
						placeholder='Ваше email'
						registerName='email'
						register={register}
						errors={errors.email?.message}
					/>
					<FormInput
						inputType='password'
						placeholder='Введите пароль'
						registerName='password'
						register={register}
						errors={errors.password?.message}
					/>
					<FormInput
						inputType='text'
						placeholder='Ваше имя'
						registerName='username'
						register={register}
						errors={errors.username?.message}
					/>
				</div>
				<div className={cls.formFooter}>
					<FormButton isValid={isValid} buttonText='Создать'/>
					<Link to='/user/auth'>Уже есть аккаунт</Link>
				</div>
			</form>
		</div>
	)
}

export default Register

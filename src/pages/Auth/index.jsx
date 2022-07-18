import React from 'react'
import { useForm } from 'react-hook-form'
import cls from './Auth.module.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'
import FormInput from '../../components/UI/FormInput'
import FormButton from '../../components/UI/FormButton'
import { IoMdClose } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import useIsLogin from '../../hooks/useIsLogin'
import Loader from '../Favorites/Loader/Loader'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: 'onChange',
	})

	const navigate = useNavigate()
	const { isAuth, loading } = useIsLogin()
	const [responseErrors, setResponseErrors] = React.useState(false)
	React.useEffect(() => {
		isAuth && navigate('/profile')
	}, [isAuth, navigate])

	const handleFormSubmit = async (data) => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)
			user && navigate('/profile')
		} catch (error) {
			error && setResponseErrors(true)
		} finally {
			reset()
		}
	}
	if (loading)
		return (
			<div className={cls.loading}>
				<Loader />
			</div>
		)
	return (
		<div className={cls.container}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<IoMdClose className={cls.closeForm} onClick={() => navigate('/')} />
				<div className={cls.formHeader}>
					<h3>Вход в кабинет</h3>
				</div>
				{responseErrors && (
					<span style={{ fontSize: 14, color: '#c72f31' }}>
						Непраильный Логин или пароль
					</span>
				)}
				<div className={cls.formBody}>
					<FormInput
						inputType='text'
						placeholder='Ваш email адресс'
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
				</div>
				<div className={cls.formFooter}>
					<FormButton isValid={isValid} buttonText='Войти' />
					<Link to='/user/register'>Еще нет аккаунта</Link>
				</div>
			</form>
		</div>
	)
}

export default Auth

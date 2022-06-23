import React from 'react'
import cls from './ProfileImg.module.scss'
import { BsPersonFill } from 'react-icons/bs'
import useIsLogin from '../../hooks/useIsLogin'
import { useNavigate } from 'react-router-dom'

const ProfileImg = () => {
	const { isAuth } = useIsLogin()
	const navigate = useNavigate()

	return (
		<>
			{isAuth ? (
				<div className={cls.profileImg}>
					<img
						src={isAuth?.photoURL}
						alt='profile img'
						onClick={() => navigate('/profile')}
					/>
				</div>
			) : (
				<div className={cls.profile}>
					<BsPersonFill onClick={() => navigate('/profile')} />
				</div>
			)}
		</>
	)
}

export default ProfileImg

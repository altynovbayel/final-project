import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useIsLogin from '../../hooks/useIsLogin'

const PrivateRoutes = () => {
	const { isAuth } = useIsLogin()
	return isAuth ? <Outlet /> : <Navigate to={'/user/auth'} />
}

export default PrivateRoutes

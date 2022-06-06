import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
	const userToken = !!localStorage.getItem('userToken')
	return userToken ? <Outlet /> : <Navigate to='/user/auth' />
}

export default PrivateRoutes

import React from 'react'
import { AuthContext } from '../providers/AuthProviders/AuthProviders'

const useIsLogin = () => {
	return React.useContext(AuthContext)
}

export default useIsLogin

import React from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../services/firebase/firebase";
import {getFirestore} from "firebase/firestore";

export const AuthContext = React.createContext({})

export const AuthProviders = ({children}) => {
	const [totalPages , setTotalPages] = React.useState(false)
	const [isAuth, setIsAuth] = React.useState(null)
	const [loading, setLoading] = React.useState(true)
  const [moneySum, setMoneySum] = React.useState(0)
	const db = getFirestore()

	React.useEffect(() => {
		const Listen = onAuthStateChanged(auth, user => {
			if (user){
				setLoading(false)
				setIsAuth(user)
			}else{
				setIsAuth(null)
				setLoading(false)
			}
		})
		return () => Listen()
	}, [isAuth])

	const value = React.useMemo(() => {
		return {
			isAuth,
			loading,
			setTotalPages,
			totalPages,
      moneySum,
      setMoneySum,
			db,
		}
	}, [isAuth, loading , setTotalPages , totalPages, moneySum, setMoneySum, db])
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};


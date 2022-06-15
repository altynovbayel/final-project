import React from 'react'
import cs from './PersonProfile.module.scss'
import { signOut } from 'firebase/auth'
// import {useMediaQuery} from "react-responsive";
import MobileProfile from './MobileProfil'
import { auth } from '../../services/firebase/firebase'
import { useNavigate } from 'react-router-dom'
import useIsLogin from "../../hooks/useIsLogin";

const PersonProfile = () => {
	const navigate = useNavigate()
	// const isMobile = useMediaQuery({query: '(max-width)'})

	return (
		<div className={cs.root}>
			{<MobileProfile />}

			<button
				onClick={() => {
					signOut(auth).then(() => {
						navigate('/')
					})
				}}
			>
				signOut
			</button>
		</div>
	)
}

export default PersonProfile

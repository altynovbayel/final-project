import React from 'react';
import cs from './Profil.module.scss'
import {getUser, updatePrfile} from "../../../configs";
import useIsLogin from "../../../hooks/useIsLogin";
import {BsFillPencilFill} from "react-icons/bs";
import {signOut, updateProfile} from "firebase/auth";
import {auth} from "../../../services/firebase/firebase";
import {useNavigate} from "react-router-dom";
import SortButton from "./components/SortButton/SortButton";
import Comment from "../Comment/Comment";
import OrdersHistory from "../OrdersHistory/OrdersHistory";
import Loader from "../../../components/Loader/Loader";

const MobileProfile = () => {
	const navigate = useNavigate()
	const {isAuth} = useIsLogin()
	const [activeNavigation, setActiveNavigation] = React.useState(
		{id: 0, text: 'Мои отзывы', type: 'reviews'},
	)
	const [data, setData] = React.useState(null)
	const navigations = [
		{id: 0, text: 'Мои отзывы', type: 'reviews'},
		{id: 1, text: 'История заказов', type: 'historyOrder'},
	]

	React.useEffect(() => {
		getUser(isAuth?.uid).then(res => {
			if (!res.data?.photo) {
				const base = {
					...res.data,
					photo: 'https://api-private.atlassian.com/users/2e5afb4451de305435994b4dbca95d38/avatar'
				}
				setData(base)
			} else {
				setData(res?.data)
			}
		})
	}, [isAuth?.uid])

	function postUpdate() {
		updatePrfile(isAuth?.uid, data)
		updateProfile(isAuth, {
			displayName: data.username,
			photoURL: data.photo
		})
	}

	if (!data) return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
			<Loader/>
		</div>
	)

	return (
		<div className={cs.Profile}>
			<div className={cs.cards}>
				<div className={cs.cards_header}>
					<div className={cs.headers_image}>
						<img src={data?.photo} alt=""/>
					</div>
				</div>
				<div className={cs.cards_body}>
					<label>
						<input
							onChange={e => setData({...data, email: e.target.value})}
							defaultValue={data.email}
							type="email"
							placeholder='email'
						/>
						<BsFillPencilFill className={cs.icons}/>
					</label>
					<label>
						<input
							onChange={e => setData({...data, photo: e.target.value})}
							type="text"
							placeholder='URL на картинку'
						/>
						<BsFillPencilFill className={cs.icons}/>
					</label>
					<label>
						<input
							onChange={e => setData({...data, username: e.target.value})}
							type="text"
							defaultValue={data.username}
							placeholder='Names'
						/>
						<BsFillPencilFill className={cs.icons}/>
					</label>
					<label>
						<input
							onChange={e => setData({...data, phoneNumber: e.target.value})}
							type="text"
							defaultValue={data.phoneNumber}
							placeholder='Number'
						/>
						<BsFillPencilFill className={cs.icons}/>
					</label>
					<label>
						<input
							onChange={e => setData({...data, years: e.target.value})}
							defaultValue={data.years}
							type="date"
						/>
					</label>
					<div className={cs.btn_container}>
						<button
							className={cs.btn}
							onClick={() => postUpdate()}
						>
							Изменить
						</button>
						<button
							className={cs.btnSignOut}
							onClick={() => {
								signOut(auth).then(() => {
									navigate('/')
								})
							}}
						>
							Выйти
						</button>
					</div>
				</div>
			</div>
			<div className={cs.navigation}>
				{
					navigations.map(type => (
						<SortButton
							key={type.id}
							buttonText={type.text}
							isActive={type.type === activeNavigation.type}
							onClick={() => setActiveNavigation(type)}
						/>
					))
				}
			</div>
			<div className={cs.container}>
				{
					activeNavigation.type === 'reviews' ? (
						<Comment/>
					) : (
						<OrdersHistory/>
					)
				}
			</div>
		</div>
	);
};

export default MobileProfile;
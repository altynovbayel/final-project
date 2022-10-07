import React from 'react';
import cls from "./Chat.module.scss";
import {BsChatSquareDotsFill} from "react-icons/bs";
import {IoMdSend} from "react-icons/io";
import Message from "./Message/Message";
import {getMessages, sendMessage} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";
import {onSnapshot, collection, addDoc, query, where} from "firebase/firestore";


const Chat = () => {
	const [isActive, setIsActive] = React.useState(false)
	const [content, setContent] = React.useState('')
	const {isAuth, db} = useIsLogin()
	const [messagesData, setMessagesData] = React.useState(null)

	// const getMessagesHandle = (userId) => {
	// 	getMessages(userId).then(r => {
	// 		if (r.data){
	// 			const newData = Object.entries(r.data).map(([id, item]) => {
	// 				return {
	// 					id,
	// 					...item
	// 				}
	// 			})
	//
	// 			setMessagesData(newData)
	// 		}
	// 	})
	// }

	React.useEffect(() => {

	}, [db])


	const sendMessageHandle = async() => {
		try{
			const data = {
				content,
				photo: isAuth?.photoURL,
				username: isAuth?.displayName,
				date: new Date().toLocaleString(),
				admin: false,
			}
			const docRef = await addDoc(collection(db, 'messages'), data)
		}catch (e){
			console.log(e)
		}finally {
			setContent('')
		}
	}

	return (
		<>
			{
				!isActive ? (
					<div
						className={cls.chatIcon}
						onClick={() => setIsActive(true)}
					>
						<BsChatSquareDotsFill/>
					</div>
				) : (
					<div className={cls.chatContainer}>
						<div className={cls.chatHeader}>
							<h3>Чат поддрежки</h3>
							<span onClick={() => setIsActive(false)}>&times;</span>
						</div>
						<div className={cls.chatBody}>
							{
								messagesData?.map(message => (
									<Message
										key={message.id}
										{...message}
									/>
								))
							}
						</div>
						<div className={cls.chatFooter}>
							<div className={cls.wrapper}>
								<input
									type="text"
									placeholder={'Задайте вопрос'}
									value={content}
									onChange={e => setContent(e.target.value)}
								/>
								<button onClick={sendMessageHandle}>
									<IoMdSend/>
								</button>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
};

export default Chat;

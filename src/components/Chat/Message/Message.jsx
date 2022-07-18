import React from 'react';
import cls from "./Message.module.scss";


const Message = ({content, name, photo, admin}) => {
	return (
		<div className={cls.root}>
			{
				admin ? (
					<div className={cls.adminMessage}>
						<span className={cls.username}>{name}</span>
						<label>
							<div className={cls.photoContainer}>
								<img src={photo} alt={'userPhoto'}/>
							</div>
							<p>{content}</p>
						</label>
					</div>
				) : (
					<div className={cls.userMessage}>
						<span className={cls.username}>{name}</span>
						<label>
							<p>{content}</p>
							<div className={cls.photoContainer}>
								<img src={photo} alt={'userPhoto'}/>
							</div>
						</label>
					</div>
				)
			}
		</div>
	);
};

export default Message;

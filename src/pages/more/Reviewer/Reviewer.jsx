import React from 'react'
import c from './Reviewer.module.scss'
import {AiFillStar} from "react-icons/ai";

function Reviewer({name, date, content, reviewGrade, reviewerImg}) {
	return (
		<React.Fragment>
			<div className={c.block}>
				<div className={c.header}>
					{
						reviewerImg && (
							<div className={c.profileImg}>
								<img src={reviewerImg} alt="profile img"/>
							</div>
						)
					}
					<h3>{name}</h3>
				</div>
				<div className={c.body}>
					{Array(reviewGrade).fill(0).map((_, id) => (
						<AiFillStar key={id}/>
					))}
				</div>
				<div className={c.footer}>
					<span>{date}</span>
					<p>{content}</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Reviewer

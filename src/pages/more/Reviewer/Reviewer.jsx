import React from 'react'
import c from './Reviewer.module.scss'

function Reviewer({name, date, content, reviewGrade, reviewerImg}) {
	return (
		<React.Fragment>
			<div className={c.block}> {
				reviewerImg && (
					<div className={c.profileImg}>
						<img src={reviewerImg} alt="profile img"/>
					</div>
				)
			}
				<div className={c.header}>

					<h3>{name}{reviewGrade}</h3>
					<span>{date}</span>
				</div>
				<div className={c.body}>
					<p>{content}</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Reviewer

import React from 'react'
import c from './Reviewer.module.scss'

function Reviewer({name, date, content, reviewGrade}) {
  return (
    <React.Fragment>
      <div className={c.block}>
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

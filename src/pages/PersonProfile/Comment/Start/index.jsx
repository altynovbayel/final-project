import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Start = ({items , cs}) => {
  return (
    <>
      {
        Array.from({ length: items }).map((items , index) => <AiFillStar key={index} className={cs.star}/>)
      }
    </>
  )
}

export default Start
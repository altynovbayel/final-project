import React from 'react';
import cs from './Comment.module.scss'
import { useNavigate } from "react-router-dom";
import {getUser} from '../../../configs';
import useIsLogin from "../../../hooks/useIsLogin";

const Comment = () => {
  const {isAuth} = useIsLogin()
  const navigate = useNavigate()
  const [dataBase , setDataBase] = React.useState(null)

  React.useEffect(() => {
    getUser(isAuth.uid).then(res => {
      const base = Object.entries(res.data.reviews).map(([id , items]) => {
        return {
          id ,
          ...items
        }
      })
      setDataBase(base)
    })
  }, [])

  if(!dataBase) return <h1></h1>

  return (
    <>
      <h1 className={cs.logo}>Ваши комментарии</h1>
      <div className={cs.container}>
      {
        dataBase && dataBase.map(item => (
          <div className={cs.cards} key={item.id}>
            <div className={cs.cards_header}>
              <img src={item.images[0]} alt=""/>
              <p className={cs.date}>{item.date}</p>
            </div>
            <div className={cs.cards_body}>
              <div className={cs.cards_body_header}>
                <h1 className={cs.title}>{item.productName}</h1>
              </div>
              <div className={cs.text}>
                <p>
                  {
                    item.reviewContent.length > 50
                    ? `${item.reviewContent.split('').slice(0 , 70).join('')}...`
                    : item.reviewContent
                  }
                </p>
              </div>
              <div className={cs.cards_body_footer}>
                <button onClick={() => navigate(`/products/${item.productCategory}/${item.productId}`)}>
                  <p className={cs.link}>читать</p>
                </button>
              </div>
            </div>
          </div>
          ))
      }
    </div>
    </>
  );
};

export default Comment;
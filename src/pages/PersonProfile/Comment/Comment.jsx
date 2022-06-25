import React from 'react'
import cs from './Comment.module.scss'
import { useNavigate } from "react-router-dom";
import {getUser} from '../../../configs';
import useIsLogin from "../../../hooks/useIsLogin";
import Start from './Start';

const Comment = () => {
	const { isAuth } = useIsLogin()
	const navigate = useNavigate()
	const [dataBase, setDataBase] = React.useState(null)

  React.useEffect(() => {
    getUser(isAuth.uid).then(res => {
      if(res.data.reviews){
        const base = Object.entries(res.data?.reviews).map(([id , items]) => {
          return {
            id ,
            ...items
          }
        })
        setDataBase(base)
      }else {
        setDataBase(null)
      }
    })
  }, [])

  if(!dataBase) return <h1 style={{textAlign:'center', margin:'10px 0'}}>Нет комментарии</h1>

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
                <h1 className={cs.title}>
                  {
                    item.productName.length > 20
                    ? `${item.productName.split('').slice(0 , 17).join('')}...`
                    : item.productName
                  }
                </h1>
                <p>
                  {
                    <Start items={item.reviewGrade} cs={cs}/>
                  }
                </p>
              </div>
              <div className={cs.text}>
                <p>
                  {
                    item.reviewContent.length > 60
                    ? `${item.reviewContent.split('').slice(0 , 60).join('')}...`
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

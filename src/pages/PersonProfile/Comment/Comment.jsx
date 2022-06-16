import React from 'react';
import cs from './Comment.module.scss'
import {useNavigate} from "react-router-dom";
import { getAllProducts } from '../../../configs';

const Comment = () => {

  const [dataBase , setDataBase] = React.useState(null)
  React.useEffect(() => {
    getAllProducts()
    .then(res => {
      const data = Object.entries(res.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setDataBase(data)
    })
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h1 className={cs.logo}>Ваши комментарии</h1>
      <div className={cs.container}>
      {
        dataBase.map(item => (
          <div className={cs.cards} key={item.id}>
            <div className={cs.cards_header}>
              <img src={item.images[0]} alt=""/>
            </div>
            <div className={cs.cards_body}>
              <div className={cs.cards_body_header}>
                <p>{item.productName}</p>
                {/*<p>{item.date}</p>*/}
              </div>
              <div className={cs.text}>
                <p>
                  {
                    item.text ? item.text.length > 70
                      ? `${item.text.split('').slice(0 , 70).join('')}...`
                      : item.text
                      : 'нету'
                  }
                </p>
              </div>
              <div className={cs.cards_body_footer}>
                <button onClick={() => navigate(`products/:category/:productId`)}>
                  <p className={cs.link}>more</p>
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

//navigate() - изменить
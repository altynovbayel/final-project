import React from 'react';
import cs from './Comment.module.scss'
import {useNavigate} from "react-router-dom";
import data from "../../../utils/ComentsData";

const Comment = () => {

  React.useEffect(() => {
    fetch(
      'https://console.firebase.google.com/project/finalproject-6dca2/database/finalproject-6dca2-default-rtdb/data/~2F')
      .then(res => res.json())
      .then(res => console.log(res))
  })

  const navigate = useNavigate()

  return (
    <div className={cs.container}>
      {
        data.map(item => (
          <div className={cs.cards} key={item.id}>
            <div className={cs.cards_header}>
              <img src={item.urlImage} alt=""/>
            </div>
            <div className={cs.cards_body}>
              <div className={cs.cards_body_header}>
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
              <div className={cs.text}>
                <p>
                  {
                    item.text.length > 70
                      ? `${item.text.split('').slice(0 , 70).join('')}...`
                      : item.text
                  }
                </p>
              </div>
              <div className={cs.cards_body_footer}>
                <button onClick={() => navigate(`${item.route}`)}>
                  <p className={cs.link}>more</p>
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Comment;
import React from 'react';
import cs from './cards.module.scss'
import {useNavigate} from "react-router-dom";

const Cards = ({list}) => {
  const navigate = useNavigate()
  return (
    <>
      {
        list.map((item , index) => (
          <div key={index} className={cs.cards_container}>
            <div className={cs.cards}>
              <div className={cs.cards_header}>
                {item.icons}
              </div>
              <div className={cs.cards_body}>
                <div className={cs.logo}>
                  <h1>{item.names}</h1>
                </div>
                <div className={cs.text}>
                  <p>
                    {item.text}
                  </p>
                </div>
                <div className={cs.footer}>
                  <button onClick={() => navigate(`${item.route}`)}>подробнее</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Cards;
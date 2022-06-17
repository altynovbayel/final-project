import React from 'react';
import {useNavigate} from "react-router-dom";

const Cards = ({cs , items}) => {
  const navigate = useNavigate()

  function click(id){
    const el = document.getElementById(`${id}`);
    el.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div id={items.id} onClick={e => console.log(e)}>
      <div className={cs.left_block}>
        <img src={items.urlImages} alt=""/>
      </div>
      <div className={cs.right_block}>
        <div className={cs.cards}>
          <div className={cs.cards_header}>
            <div className={cs.logo}>
              <h1>LOGO</h1>
            </div>
            <p>
              {
                items.text.length > 330 ? `${items.text.split('').slice(0 , 330).join('')}...` : items.text
              }
            </p>
          </div>
          <div className={cs.cards_body}>
            <button
              onClick={() => navigate(`/products/:productCategory/:productId`)}
              className={cs.moreBtn}
            >
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
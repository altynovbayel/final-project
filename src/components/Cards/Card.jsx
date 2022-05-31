import React from 'react';
import c from './Card.module.scss'
import {ProductList} from "../../utils/List";

function Card() {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <div className={c.container}>
        {
          ProductList.map(({productImg,productName,price,id}) => (
            <div key={id} className={c.card}>
              <div className={c.card_img}>
                {
                  productImg.map((img,i) => (
                    <img key={i} src={img} alt="products" />
                  ))
                }
              </div>
              <div className={c.card_body}>
                <h3>{productName}</h3>
                <h4>{price} som</h4>
                <div className={c.btns}>
                  <div className={c.counter}>
                    <button>-</button>
                    <span>{count}</span>
                    <button>+</button>
                  </div>
                  <button className={c.cart_btn}>В корзину</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Card;
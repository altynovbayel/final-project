import React from 'react';
import c from './Card.module.scss'


function Card({productList}) {
  const [count, setCount] = React.useState(0)
  const countIncrement = () => setCount(prev => prev + 1)
  const countDecrement = () => setCount(prev => prev - 1)

  return (
    <>
      <div className={c.container}>
        {

          productList.map(({productImg,productName,price,id}) => (

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
                    <button onClick={countDecrement}>-</button>
                    <span>{count} шт</span>
                    <button onClick={countIncrement}>+</button>
                  </div>
                  <button className={c.cart_btn}>
                    В корзину
                  </button>
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
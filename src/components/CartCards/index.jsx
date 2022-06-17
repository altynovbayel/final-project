import React from 'react'
import c from './CartCards.module.scss'
import Button from '../UI/Button'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import useIsLogin from "../../hooks/useIsLogin";
import {AiOutlineStar, AiTwotoneDelete} from 'react-icons/ai'
import {removeCart} from "../../configs";


function CartCard({productList, setProductList, getCard}) {
  const navigate = useNavigate()
  const {isAuth} = useIsLogin()
  const [count, setCount] = React.useState(1)
  const [totalPrice, setTotalPrice] = React.useState(null)
  
  function countIncrement(id) {
    const arr = productList.map((item) => {
      return {
        ...item,
        count: item.id === id ? item.count + 1 : item.count,
      }
    })
    
    setProductList(arr)
  }

  function countDecrement(id) {
    const arr = productList.map((item) => {
      return {
        ...item,
        count: item.id === id ? item.count - 1 : item.count,
      }
    })
    setProductList(arr)
  }
  
  function handleRemoveCard(id){
    removeCart(isAuth.uid, id).then(r => r && getCard())
  }
  
  return (
    <>
      <div className={c.container}>
        {productList.map(
          ({
             images,
             productName,
             price,
             id,
             count,
             category,
             favorite,
             reviewGrade
           }) => (
            <div key={id} className={c.card}>
              <div
                className={c.card_img}
                onClick={() => navigate(`/products/${category}/${id}`)}
              >
                <img src={images[0]} alt='img'/>
              </div>
              <div className={c.card_body}>
                <div className={c.name}>
                  {productName.split('').length > 20
                    ? `${productName.split('').slice(0, 16).join('')}...`
                    : productName
                  }
                  <div>
                    <AiTwotoneDelete onClick={() => handleRemoveCard(id)}/>
                  </div>
                </div>
                <div className={c.price}>
                  {reviewGrade} <AiOutlineStar/>
                </div>
                <div className={c.counter}>
                  <button
                    onClick={() => countDecrement(id)}
                    disabled={count === 1}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button onClick={() => countIncrement(id)}>+</button>
                </div>
                <div className={c.priceBlock}>
                  <div className={c.price}>
                    price: {price}
                  </div>
                  <div>
                    total: {price * count}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default CartCard

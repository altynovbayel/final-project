import React from 'react'
import c from './CartCards.module.scss'
import Button from '../UI/Button'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import useIsLogin from "../../hooks/useIsLogin";
import {AiOutlineStar} from 'react-icons/ai'


function CartCard({productList, setProductList}) {
  const navigate = useNavigate()
  const {isAuth} = useIsLogin()
  // const [count, setCount] = React.useState(1)
  // const [price, setPrice] = React.useState(null)
  // const [totalPrice, setTotalPrice] = React.useState(null)
  
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
                <div className={c.name}>{productName}</div>
                <div className={c.price}>
                  {reviewGrade} <AiOutlineStar/>
                </div>
                <div className={c.counter}>
                  <button
                    onClick={() => countDecrement(id)}
                    disabled={count === 0}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button onClick={() => countIncrement(id)}>+</button>
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

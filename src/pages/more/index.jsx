import React from 'react';
import {useParams} from "react-router-dom";
import {productList} from "../../utils/List";
import c from './more.module.scss'
import {MdOutlineFavoriteBorder} from "react-icons/md";
import SliderDots from "../../components/Slider/sliderDots";
import SliderButtons from "../../components/Slider/SliderBtn/SliderButtons";

function More() {
  const {id} = useParams()
  const [cardMoreData] = productList.filter(item => id == item.id)
  const [indexImg, setIndexImg] = React.useState(1)
  const [count, setCount] = React.useState(cardMoreData.count)
  
  const increment = () => {
    setCount(prev => prev + 1)
  }
  
  const decrement = () => {
    setCount(prev => prev - 1)
  }
  
  let price = cardMoreData.price * count
  
  const nextSlide = () => {
    setIndexImg(prev => prev + 1)
    indexImg === cardMoreData.productImg.length && setIndexImg(1)
  }
  
  const prevSlide = () => {
    setIndexImg(prev => prev - 1)
    indexImg === 1 && setIndexImg(cardMoreData.productImg.length)
  }
  
  if(!cardMoreData) return <h1>loading...</h1>
  return (
    <>
      <div className={c.container}>
        <div className={c.slider}>
          <div className={c.slider_img}>
            {
              cardMoreData.productImg.map((url, i) =>
                <img
                  className={indexImg === i + 1
                    ? c.imagesActive : c.images}
                  key={i}
                  src={url}
                  alt="slider"
                />)
            }
            <SliderButtons next={nextSlide} prev={prevSlide}/>
          </div>
          <div className={c.dots}>
            <SliderDots state={indexImg} setState={setIndexImg} list={cardMoreData.productImg}/>
          </div>
        </div>
        <div className={c.content}>
          <div className={c.likedBtn}>
            <MdOutlineFavoriteBorder />
            <p>Add to favorites</p>
          </div>
          <h1>{cardMoreData.productName}</h1>
          <div className={c.counter}>
            <div className={c.count}>
              <button
                onClick={decrement}
                disabled={count === 1}
              >
                -
              </button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
            <div>
              <h2>{price}  сом</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
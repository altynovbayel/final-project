import React from 'react';
import cs from './swiper.module.scss'
import aboutList from "../../../../utils/AboutList";
import {AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";

const Swiper = ({swiperState , setSwiperState}) => {
  function next(){
    if(swiperState !== aboutList.length){
      setSwiperState(item => item + 1)
    }else {
      setSwiperState(1)
    }
  }
  function prev(){
    if(swiperState !== 1){
      setSwiperState(item => item - 1)
    }else {
      setSwiperState(aboutList.length)
    }
  }

  return (
    <div className={cs.swiper}>
      {
        aboutList.map((item , index) => (
          <img
            key={item.id}
            src={item.urlImages}
            className={swiperState === index + 1 ? `${cs.image} ${cs.active}` : cs.image}
            alt=""
          />
        ))
      }
      <button
        onClick={next}
        className={cs.right}
      >
        <AiOutlineArrowRight/>
      </button>
      <button
        onClick={prev}
        className={cs.left}
      >
        <AiOutlineArrowLeft/>
      </button>
    </div>
  );
};

export default Swiper;

//AiOutlineArrowRight
//AiOutlineArrowLeft
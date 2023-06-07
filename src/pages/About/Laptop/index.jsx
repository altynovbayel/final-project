import React from 'react';
import cs from './Laptop.module.scss'
import Swiper from "./swiper";

import Cards from "./cards";
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";
import Map from '../../Contacts/map';
import { getAllProducts } from '../../../configs';
import { aboutList } from '../../../utils/List';

const Laptop = () => {
  

  const [swiperState , setSwiperState] = React.useState(1)
  const [scrollTop , setScrollTop] = React.useState(70)

  React.useEffect(() => {
    window.scroll({
      left: 0,
      top: scrollTop,
      behavior: 'smooth',
    })
  } , [scrollTop])

  function funScrollTop() {setScrollTop(item => item - window.innerHeight)}
  function funScrollDown() {setScrollTop(item => item + window.innerHeight)}



  return (
    <div className={cs.Laptop}>
      <div className={cs.swiper_container}>
        <Swiper setSwiperState={setSwiperState} swiperState={swiperState}/>
      </div>
      <h1 className={cs.logo}>Наши продукты</h1>
      <div className={cs.cards_container}>
        <Cards list={aboutList}/>
      </div>
      <div className={cs.btn_container}>
        <button
          onClick={() => funScrollTop()}
        >
          <BsFillArrowUpCircleFill/>
        </button>
        <button
          onClick={() => funScrollDown()}
        >
          <BsFillArrowDownCircleFill/>
        </button>
      </div>
      <h1 className={cs.logo2}>Где мы?</h1>
      <Map/>
    </div>
  );
};

export default Laptop;
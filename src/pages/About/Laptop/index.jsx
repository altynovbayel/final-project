import React from 'react';
import cs from './Laptop.module.scss'
import Swiper from "./swiper";
import {GiCakeSlice} from "react-icons/gi";
import Cards from "./cards";
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";
import Map from '../../Contacts/map';
import { getAllProducts } from '../../../configs';

const Laptop = () => {
  const list = [
    {
      id:1,
      icons: <GiCakeSlice/>,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.',
      route: '/products/cakes',
      names: 'Торты',
    },
    {
      id:1,
      icons: <GiCakeSlice/>,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.',
      route: '/products/sweets',
      names: 'Сладости'
    },
    {
      id:1,
      icons: <GiCakeSlice/>,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.',
      route: '/products/bakery',
      names: 'ХЛЕБ'
    },
    {
      id:1,
      icons: <GiCakeSlice/>,
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.',
      route: '/products/pies',
      names: 'Пироги'
    },
  ]

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
        <Cards list={list}/>
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
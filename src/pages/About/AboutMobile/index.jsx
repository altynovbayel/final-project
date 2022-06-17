import React from 'react';
import cs from './AboutMobile.module.scss'
import Cards from "./Cards";

const Mobile = () => {

  const list = [
    {
      id: 'one',
      urlImages: 'https://wallpaperaccess.com/full/986760.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse illo ipsa minima molestias mollitia reprehenderit similique tenetur? Consequuntur dolorum magnam mollitia nemo quo sed sunt ullam vero voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse illo ipsa minima molestias mollitia reprehenderit similique tenetur? Consequuntur dolorum magnam mollitia nemo quo sed sunt ullam vero voluptates.',
      category: '',
      names: 'Торты',
    },
    {
      id: 'two',
      urlImages: 'https://p4.wallpaperbetter.com/wallpaper/600/926/413/cupcakes-4k-download-hd-wallpaper-preview.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse illo ipsa minima molestias mollitia reprehenderit similique tenetur? Consequuntur dolorum magnam mollitia nemo quo sed sunt ullam vero voluptates.',
      category: '',
      names: 'Сладости'
    },
    {
      id: 'three',
      urlImages: 'https://img3.goodfon.com/wallpaper/nbig/e/9f/stol-hleb-zlaki-kuvshin-yayca.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse illo ipsa minima molestias mollitia reprehenderit similique tenetur? Consequuntur dolorum magnam mollitia nemo quo sed sunt ullam vero voluptates.',
      category: '',
      names: 'ХЛЕБ'
    },
    {
      id: 'four',
      urlImages: 'https://s1.best-wallpaper.net/wallpaper/m/1804/Strawberry-pie-fruit-cake_m.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse illo ipsa minima molestias mollitia reprehenderit similique tenetur? Consequuntur dolorum magnam mollitia nemo quo sed sunt ullam vero voluptates.',
      category: '',
      names: 'Пироги'
    },
  ]

  return (
    <div className={cs.About}>
      {
        list.map(items => <Cards key={items.id} cs={cs} items={items}/>)
      }
    </div>
  );
};

export default Mobile;

//AiOutlineArrowUp
//AiOutlineArrowDown
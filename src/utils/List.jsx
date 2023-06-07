import banner1 from '../assets/img/sliderImg1.jpg'
import banner2 from '../assets/img/sliderImg2.jpg'
import banner3 from '../assets/img/sliderImg3.png'
import banner4 from '../assets/img/sliderImg4.jpg'
import {GiCakeSlice} from "react-icons/gi";

export const sliderList = [ banner1, banner2, banner3, banner4]

export const aboutList = [
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
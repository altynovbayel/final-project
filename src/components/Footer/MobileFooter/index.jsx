import React from 'react';
import csc from './MobileFooter.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {navbarCategories} from "../../../utils/navbarNavigation";
import {Link} from "react-router-dom";
import Contacts from "../contacts";
import Lorem from "../lorem";
import Logo from "../logo";

const MobileFooter = () => {
  const [state , setState] = React.useState(1)
  return (
    <div className={csc.footer}>
      <div className={csc.footer_logo}>
        <Logo csc={csc}/>
      </div>

      <div className={csc.swiperModule}>
        {
          navbarCategories.map((item , index) => (
            <div className={csc.swiper_container} key={item.id}>
              <Link
                className={state === index + 1 ? `${csc.link} ${csc.active}` : csc.link}
                to={item.route}>{item.title}</Link>
            </div>
          ))
        }
        <IoIosArrowBack
          className={csc.btn_left}
          onClick={() => state !== 1 && setState(state - 1)}
        />
        <IoIosArrowForward
          className={csc.btn_right}
          onClick={() => state !== navbarCategories.length && setState(state + 1)}
        />
      </div>

      <div className={csc.footer_body}>
        <Lorem/>
      </div>

      <div className={csc.footer_footer}>
        <Contacts csc={csc}/>
      </div>
    </div>
  );
};

export default MobileFooter;

//<BsArrowLeftCircle/> - left
//<BsArrowRightCircle/> - right
//BsInstagram - инста
//BsWhatsapp - whatsapp
//AiFillPhone - phone
//GiCakeSlice - cake

//Торты? Торты! Торты на все случаи жизни. Кондитерское производство «Татарочка» представляет большой ассортимент тортов как для сладкоежек, так и для утончённых гурманов. Принимаем заказы на торты от 300 рублей за килограмм. Свадьбы, корпоративы, детские праздники и домашние чаепития становятся ещё слаще
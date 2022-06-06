import React from 'react'
import cs from './Laptop.module.scss'
import Logo from "../Logo/logo";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import {navbarCategories} from "../../../utils/navbarNavigation";
import {NavLink} from "react-router-dom";

function Laptop() {
  const [activeLink , setActiveLink] = React.useState(1)
  return (
    <div className={cs.footer}>
      <div className={cs.Laptop}>
        <div className={cs.logo}>
          <Logo/>
        </div>
        <div className={cs.list}>
          <h1>Контакты</h1>
          <div className={cs.container_contacts}>
            <a className={cs.instagram} target='_blank' href='src/components/Footer/Contacts/index.jsx'>
              <BsInstagram className={cs.icons}/>
              <p>PlayKey.kg</p>
            </a>
            <a className={cs.whatsapp} target='_blank' href='https://wa.me/+996555010101'>
              <BsWhatsapp className={cs.icons}/>
              <p>+996555010101</p>
            </a>
            <a className={cs.phone} href='tel:+996555010101'>
              <AiFillPhone className={cs.icons}/>
              <p>+996555010101</p>
            </a>
          </div>
        </div>
        <div className={cs.container_list}>
          <h1>Категории</h1>
          <div className={cs.list}>
            {
              navbarCategories.map((item , index) =>
                <NavLink
                  key={index}
                  onClick={() => setActiveLink(index + 1)}
                  className={activeLink === index + 1 ? `${cs.link} ${cs.active}` : cs.link}
                  to={item.route}
                >
                  {<item.categoryImg className={cs.icons}/>}
                  {item.title}
                </NavLink>
              )
            }
          </div>
        </div>
        <div className={cs.timeWork}>
          <h1>Время работы</h1>
          <p>c 10:00 до 23:00</p>
        </div>
      </div>
      <div className={cs.text}>
        <small>© lepeshka25. Все права защищены.</small>
      </div>
    </div>
  )
}

export default Laptop;
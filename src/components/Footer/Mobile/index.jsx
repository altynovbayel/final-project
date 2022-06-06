import React from 'react'
import cs from './Mobile.module.scss'
import Logo from '../Logo/logo'
import { NavLink } from 'react-router-dom'
import {AiFillPhone, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {navbarCategories} from "../../../utils/navbarNavigation";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";

function Mobile() {
  const [activeLink , setActiveLink] = React.useState(1)
  
  return (
    <div className={cs.mobile}>
      <div className={cs.logo_container}>
        <div className={cs.logo}>
          <Logo/>
        </div>
      </div>
      <div className={cs.container}>
        {
          navbarCategories.map((item , index) => (
            <NavLink
              key={item.id}
              to={item.route}
              onClick={() => setActiveLink(index + 1)}
              className={activeLink === index + 1 ? `${cs.link} ${cs.activeLink}` : cs.link}
            >
              {item.title}
            </NavLink>
          ))
        }
        <button
          onClick={() => setActiveLink(item => item - 1)}
          className={cs.left}
          disabled={activeLink === 1}
        >
          <AiOutlineArrowLeft/>
        </button>
        <button
          onClick={() => setActiveLink(item => item + 1)}
          className={cs.right}
          disabled={activeLink === navbarCategories.length}
        >
          <AiOutlineArrowRight/>
        </button>
      </div>
      <div className={cs.contacts_container}>
        <div className={cs.container}>
          <a className={cs.instagram} target='_blank' href='src/components/Footer/Contacts/index.jsx'>
            <BsInstagram className={cs.icons}/>
          </a>
          <a className={cs.whatsapp} target='_blank' href='https://wa.me/+996555010101'>
            <BsWhatsapp className={cs.icons}/>
          </a>
          <a className={cs.phone} href='tel:+996555010101'>
            <AiFillPhone className={cs.icons}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile;
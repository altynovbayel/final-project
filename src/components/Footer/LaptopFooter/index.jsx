import React from 'react';
import cs from './LaptopFooter.module.scss'
import Lorem from "../lorem";
import Logo from "../logo";
import Contacts from "../contacts";
import {navbarCategories} from "../../../utils/navbarNavigation";
import {NavLink} from "react-router-dom";

const LaptopFooter = () => {
  return (
    <div className={cs.footer}>
      <div className={cs.logo}>
        <Logo csc={cs}/>
      </div>
      <div className={cs.list}>
        {
          navbarCategories.map((item) => (
            <NavLink
              key={item.id}
              className={isActive => isActive ? `${cs.link} ${cs.active}` : cs.link}
              to={item.route}
            >
              {item.title}
            </NavLink>
          ))
        }
      </div>
      <div className={cs.text}>
        <Lorem/>
      </div>
      <div className={cs.footer_footer}>
        <Contacts csc={cs}/>
      </div>
    </div>
  );
};

export default LaptopFooter;
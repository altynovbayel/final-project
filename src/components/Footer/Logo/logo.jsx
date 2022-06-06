import React from 'react';
import backgroundImage from "../../../assets/img/pngegg.png";
import {GiCakeSlice} from "react-icons/gi";
import csc from '../Logo/Logo.module.scss'

const Logo = () => {
  return (
    <React.Fragment>
      <div className={csc.footer_logo_container}>
        <img className={csc.footer_logo_background} src={backgroundImage} alt=""/>
        <GiCakeSlice className={csc.footer_logo_logo}/>
      </div>
    </React.Fragment>
  );
};

export default Logo;
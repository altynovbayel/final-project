import React from 'react';
import {useMediaQuery} from "react-responsive";
import MobileFooter from "./Mobile";
import LaptopFooter from "./Laptop";
import cs from './index.module.scss'

const Footer = () => {
  const isMobileFooter = useMediaQuery({query: '(max-width: 767px)'})
  const isLaptopFooter = useMediaQuery({query: '(min-width: 768px)'})

  return (
    <div className={cs.like}>
      {isLaptopFooter && <LaptopFooter/>}
      {isMobileFooter && <MobileFooter/>}
    </div>
  );
};

export default Footer;
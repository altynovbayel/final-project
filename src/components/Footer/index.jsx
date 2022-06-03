import React from 'react';
import {useMediaQuery} from "react-responsive";
import MobileFooter from "./MobileFooter";
import LaptopFooter from "./LaptopFooter";

const Footer = () => {
  const isMobileFooter = useMediaQuery({query: '(max-width: 767px)'})
  const isLaptopFooter = useMediaQuery({query: '(min-width: 768px)'})

  return (
    <React.Fragment>
      {isLaptopFooter && <LaptopFooter/>}
      {isMobileFooter && <MobileFooter/>}
    </React.Fragment>
  );
};

export default Footer;
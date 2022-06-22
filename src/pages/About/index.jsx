import React from 'react';
import {useMediaQuery} from "react-responsive";
// import AboutMobile from "./AboutMobile";
import Laptop from "./Laptop";

const Index = () => {
  // const isMobile = useMediaQuery({query: '(max-width: 425px)'})
  // const isLaptop = useMediaQuery({query: '(min-width: 426px)'})
  return (
    <>
      <Laptop/>
      {/*{isMobile && <AboutMobile/>}*/}
      {/*{isLaptop && <Laptop/>}*/}
    </>
  );
};

export default Index;
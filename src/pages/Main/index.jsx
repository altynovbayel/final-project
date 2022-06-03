import React from 'react';
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Cards/Card";
import {productList, sliderList} from '../../utils/List'



function Main() {
  return (
    <div>
      <Slider list={sliderList}/>
      <Card productList={productList}/>
    </div>
  );
}

export default Main;
import React from 'react';
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Cards/Card";
import {productList} from '../../utils/List'


function Main() {
  return (
    <div>
      <Slider/>
      <Card productList={productList}/>
    </div>
  );
}

export default Main;
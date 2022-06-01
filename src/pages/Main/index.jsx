import React from 'react';
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Cards/Card";
import {ProductList} from "../../utils/List";

function Main() {
  return (
    <div>
      <Slider/>
      <Card list={ProductList}/>
    </div>
  );
}

export default Main;
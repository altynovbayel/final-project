import React from 'react';
import c from "./SliderBtn.module.scss";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

function SliderButtons({next, prev}) {
  return (
    <>
      <button
        className={`${c.buttons} ${c.prev}`}
        onClick={prev}
      >
        <BsArrowLeft/>
      </button>
      <button
        className={`${c.buttons} ${c.next}`}
        onClick={next}
      >
        <BsArrowRight/>
      </button></>
  );
}

export default SliderButtons;
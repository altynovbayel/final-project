import React from 'react';
import c from "./Slider.module.scss";
import {MdCake, MdOutlineCake} from "react-icons/md";

function SliderDots({state, setState, list}) {
  return (
    <>
      <div className={c.dots}>
        {
          Array.from({length: list.length}).map((item, i) =>
            <div
              onClick={() => setState(i + 1)}
              key={i}
              className={c.dots_item}
            >
              {
                state === i + 1 ? <MdCake/> : <MdOutlineCake/>
              }
            </div>)
        }
      </div>
    </>
  );
}

export default SliderDots;
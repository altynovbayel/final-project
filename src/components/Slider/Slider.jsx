import React from 'react';
import {SliderList} from "../../utils/List";
import c from './Slider.module.scss'
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi'

function Slider() {
  const [indexImg, setIndexImg] = React.useState(1)
  const nextSlide = () => {
    setIndexImg(prev => prev + 1)
  }
  const prevSlide = () => {
    setIndexImg(prev => prev - 1)
  }
  return (
    <>
      <div className={c.slider}>
        {
          SliderList.map((url, index) => <img key={index} className={indexImg === index + 1 ? c.imagesActive : c.images} src={url} alt={'slider'}/>)
        }
        <button
          className={c.prev}
          onClick={prevSlide}
          disabled={indexImg === 1}
        >
          <HiOutlineArrowNarrowLeft/>
        </button>
        <button
          className={c.next}
          onClick={nextSlide}
          disabled={indexImg === SliderList.length}
        >
          <HiOutlineArrowNarrowRight/>
        </button>
      </div>
      <div className={c.dots}>
        {
          Array.from({length: SliderList.length}).map((item, i) =>
            <div className={indexImg === i+1 ? c.dotsActive : c.dot_item}></div>)
        }
      </div>
    </>
  );
}

export default Slider;
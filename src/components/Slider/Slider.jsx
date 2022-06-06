import React from 'react';
import c from './Slider.module.scss'
import SliderDots from "./sliderDots";
import SliderButtons from "./SliderBtn/SliderButtons";

function Slider({list}) {
  const [indexImg, setIndexImg] = React.useState(1)
  
  const nextSlide = () => {
    setIndexImg(prev => prev + 1)
    indexImg === list.length && setIndexImg(1)
  }
  const prevSlide = () => {
    setIndexImg(prev => prev - 1)
    indexImg === 1 && setIndexImg(list.length)
  }
  return (
    <>
      <div className={c.slider}>
        {
          list.map((url, index) =>
            <img key={index} className={indexImg === index + 1 ? `${c.images} ${c.imagesActive}` : c.images} src={url} alt={'slider'}
            />)
        }
        <SliderButtons next={nextSlide} prev={prevSlide}/>
      </div>
      <SliderDots state={indexImg} setState={setIndexImg} list={list}/>
    </>
  );
}

export default Slider;
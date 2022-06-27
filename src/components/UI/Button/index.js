import React from 'react';
import c from './Btn.module.scss'

function Button({buttonText, onClick, style}) {
  console.log(style)
  return (
    <button
      className={c.button}
      onClick={onClick}
      style={style}
    >
      {buttonText}
    </button>
  );
}

export default Button;
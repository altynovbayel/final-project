import React from 'react';
import c from './Btn.module.scss'

function Button({buttonText, onClick}) {
  return (
    <button
      className={c.button}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
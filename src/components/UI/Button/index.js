import React from 'react';
import c from './Btn.module.scss'

function Button({buttonText}) {
  return (
    <button className={c.button}>
      {buttonText}
    </button>
  );
}

export default Button;
import React from 'react';
import c from './Btn.module.scss'

function Button({buttonText, onclick}) {
  return (
    <button
      className={c.button}
      onClick={onclick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
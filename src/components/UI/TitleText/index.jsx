import React from 'react';
import c from './Title.module.scss'

function Title({text}) {
  return (
    <div className={c.text}>
      <h2>
        {text}
      </h2>
    </div>
  );
}

export default Title;
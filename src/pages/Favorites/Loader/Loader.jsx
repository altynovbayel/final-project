import React from 'react';
import './LoaderStyle.css'

const Loader = () => {
  return (
    <React.Fragment>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
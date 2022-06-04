import React from 'react';
import cs from './MobileProfil.module.scss'
import SelectList from "./SelectList";

const MobileProfile = () => {
  return (
    <div className={cs.root}>
      <SelectList/>
    </div>
  );
};

export default MobileProfile;
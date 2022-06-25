import React from 'react';
import cs from './Mobile.module.scss'
import ProfileInput from "../../../../components/UI/ProfileInput";

const Mobile = ({data , setData}) => {
  const base = [data].map(item => delete item.input)
  return (
    <div className={cs.Mobile}>
      <div className={cs.cards}>
        <div className={cs.cards_header}>
          {/*<img src={} alt=""/>*/}
        </div>
        <div className={cs.cards_body}>
          <div className={cs.container_input}>
            <ProfileInput data={data} setData={setData}/>
          </div>
        </div>
        <div className={cs.cards_footer}></div>
      </div>
    </div>
  );
};

export default Mobile;
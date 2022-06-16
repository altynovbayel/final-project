import React from 'react';
import cs from './Profil.module.scss'
import {BsFillPencilFill} from "react-icons/bs";
import {BiImageAdd} from "react-icons/bi";

const MobileProfile = () => {

  const list = {
    name:'Nika',
    years: '12.06.2004',
    number: '+996555555555'
  }

  return (
    <div className={cs.Profils}>
      <div className={cs.card}>
        <div className={cs.card_header}>
          <div className={cs.card_header_container}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <BiImageAdd className={cs.pencil}/>
          </div>
        </div>
        <div className={cs.card_body}>
          <fieldset className={cs.name}>
            <p>{list.name}</p>
            <BsFillPencilFill className={cs.pencil}/>
          </fieldset>
          <fieldset className={cs.years}>
            <p>{list.years}</p>
            <BsFillPencilFill className={cs.pencil}/>
          </fieldset>
          <fieldset className={cs.number}>
            <p>{list.number}</p>
            <BsFillPencilFill className={cs.pencil}/>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
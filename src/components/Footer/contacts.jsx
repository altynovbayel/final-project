import React from 'react';
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";

const Contacts = ({csc}) => {
  return (
    <React.Fragment>
      <a className={csc.instagram} href='https://www.instagram.com/'>
        <BsInstagram className={csc.icons}/>
      </a>
      <a className={csc.whatsapp} href='https://wa.me/+996704708090'>
        <BsWhatsapp className={csc.icons}/>
      </a>
      <a className={csc.phone} href='tel:+996704708090'>
        <AiFillPhone className={csc.icons}/>
      </a>
    </React.Fragment>
  );
};

export default Contacts;
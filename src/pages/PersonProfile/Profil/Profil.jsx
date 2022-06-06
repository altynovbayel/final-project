import React from 'react';
import cs from  './Profil.module.scss'

const Profil = () => {

  const list = {
    name:'Nika',
    years: '12.06.2004',
    number: '+996555555555'
  }

  return (
    <div className={cs.Profil}>
      <div className={cs.card}>
        <div className={cs.card_header}>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </div>
        <div className={cs.card_body}>
          <div className={cs.name}>
            <strong>Имя:</strong><p>{list.name}</p>
          </div>
          <div className={cs.years}>
            <strong>Дата:</strong><p>{list.years}</p>
          </div>
          <div className={cs.number}>
            <strong>Номер:</strong><p>{list.number}</p>
          </div>
        </div>
        <div className={cs.card_footer}>
          <button>change date</button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
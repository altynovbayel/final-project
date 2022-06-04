import React from 'react';
import cs from './SelectList.module.scss'
import {selectList} from "../../../../utils/selectList";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Index = () => {
  const [active , setActive] = React.useState(false)
  return (
    <div className={active ? `${cs.selectList_container} ${cs.active}` : cs.selectList_container}>
      <div className={cs.selectList}>
        <div className={active ? `${cs.dropDown} ${cs.active}` : cs.dropDown}>
          {
            selectList.map(item => <button key={item.id} className={cs.btn}>{item.title}</button>)
          }
          <div
            className={active ? `${cs.dropBtn} ${cs.active}` : `${cs.dropBtn}`}
            onClick={() => setActive(item => !item)}
          >
            <MdOutlineKeyboardArrowDown className={cs.icons}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

{/*{*/}
{/*  selectList.map(item => (*/}
{/*    <></>*/}
{/*  ))*/}
{/*}*/}
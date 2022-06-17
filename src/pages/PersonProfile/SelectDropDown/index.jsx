import React from 'react';
import cs from "./dropDown.module.scss";
import {selectList} from "../../../utils/selectList";
import Comment from "../Comment/Comment";
import MobileProdil from "../MobileProfil";

const DropDown = () => {

  const listComponents = {
    personalData: <MobileProdil/>,
    commentData: <Comment/>,
  }

  function change(value){setActiveComponents(listComponents[value])}


  const [activeComponents , setActiveComponents] = React.useState(listComponents["personalData"])

  return (
    <>
      <div className={cs.dropDown}>
        <fieldset>
          <legend>Выберите:</legend>
          <select onChange={e => change(e.target.value)}>
            {
              selectList.map((item) =>
                <option
                  key={item.id}
                  value={item.value}
                >
                  {item.title}
                </option>)
            }
          </select>
        </fieldset>
      </div>
      {activeComponents}
    </>
  );
};

export default DropDown;
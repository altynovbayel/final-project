import React from 'react';
import cs from './MobileProfil.module.scss'
import {selectList} from "../../../utils/selectList";
import Profil from "../Profil/Profil";
import Status from "../Status/Status";
import Comment from "../Comment/Comment";

const MobileProfile = () => {
  
  const listComponents = [
    <Profil/>,
    <Status/>,
    <Comment/>,
  ]

  function change(value){
    if(value === 'personalData') setActiveComponents(listComponents[0])
    if(value === 'statusData') setActiveComponents(listComponents[1])
    if(value === 'commentData') setActiveComponents(listComponents[2])
  }


  const [activeComponents , setActiveComponents] = React.useState(listComponents[0])

  return (
    <div className={cs.root}>
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
      <div className={cs.container_components}>
        {activeComponents}
      </div>
    </div>
  );
};

export default MobileProfile;
import React from 'react';
import c from './info.module.scss'
import {infoList} from "../../../utils/List";

function Info() {
  return (
    <React.Fragment>
      <div className={c.container}>
        <div className={c.row}>
          {
            infoList.map(item => {
              return <div className={c.card} key={item.id}>
                <span>
                  {item.title}
                </span>
                <h2>
                  {item.content}
                </h2>
              </div>
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default Info;
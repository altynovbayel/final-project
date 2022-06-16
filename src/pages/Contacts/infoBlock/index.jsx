import React from 'react';
import c from './info.module.scss'
import {infoList} from "../../../utils/List";

function Info() {
  return (
    <React.Fragment>
      <div className={c.container}>
        <div className={c.row}>
          {
            infoList.map(item => (
              <div className={c.card} key={item.id}>
                <div>
                  <span>{ item.title }</span>
                  <p>{ item.content }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default Info;
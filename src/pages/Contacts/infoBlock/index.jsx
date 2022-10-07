import React from 'react';
import c from './info.module.scss'
// import {getContacts} from "../../../configs";

function Info() {
  // const [data, setData] = React.useState(null)
  // React.useEffect(() => {
  //   getContacts.then(r => setData(r.data))
  // }, [])
  
  return (
    <React.Fragment>
      <div className={c.container}>
        <div className={c.row}>
          <div className={c.card}>
            <div>
              <span>Позвонить </span>
              {/*<p>{data?.contacts }</p>*/}
            </div>
          </div>
          <div className={c.card}>
            <div>
              <span>Наша почта </span>
              {/*<p>{data?.email }</p>*/}
            </div>
          </div>
          <div className={c.card}>
            <div>
              <span>Наш адрес </span>
              {/*<p>{data?.address }</p>*/}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Info;
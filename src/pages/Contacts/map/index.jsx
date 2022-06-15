import React from 'react';
import c from './Map.module.scss'

function Map() {
  return (
    <React.Fragment>
     <div className={c.container}>
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.3852445185101!2d72.80061897644698!3d40.51597378708027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad6ef8d51731%3A0x34bb958dc2fdb2f5!2s%22Dayar%22%20Byshyruu%20Zhayy.%20Pekarnya%20%22Dayar%22!5e0!3m2!1sen!2skg!4v1655292669209!5m2!1sen!2skg"
         width="100%" height="500" style={{border: 0}} loading="lazy"
         referrerPolicy="no-referrer-when-downgrade">
       </iframe>
     </div>
    </React.Fragment>
  );
}

export default Map;
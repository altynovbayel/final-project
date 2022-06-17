import React from 'react';
import Map from "./map";
import Info from "./infoBlock";
import Title from "../../components/UI/TitleText";

const Contacts = () => {
	return (
		<React.Fragment>
			<Title text={'Наши контакты'}/>
      <Info/>
      <Map/>
		</React.Fragment>
	);
};

export default Contacts;

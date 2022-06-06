import React from 'react'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Cards/Card'
import { productList, sliderList } from '../../utils/List'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'

function Main() {
	return (
		<div>
			<UnderNavbar page='Main' />
			<Slider list={sliderList} />
			<Card productList={productList} />
		</div>
	)
}

export default Main

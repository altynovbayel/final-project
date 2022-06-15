import React from 'react'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Cards/Card'
import { productList, sliderList } from '../../utils/List'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'
import { getData } from '../../configs'

function Main() {

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getData()
      .then(r => setData(r))
  }, [])

  console.log(data);
	return (
		<div>
			<UnderNavbar page='Main' />
			<Slider list={sliderList} />
			<Card productList={productList} />
		</div>
	)
}

export default Main

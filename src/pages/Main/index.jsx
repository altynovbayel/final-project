import React from 'react'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Cards/Card'
import cls from "./main.module.scss";

import { sliderList } from '../../utils/List'
import UnderNavbar from '../../components/Navbar/LaptopNavbar/UnderNavbar'
import Loader from "../Favorites/Loader/Loader";
import useCards from "../../hooks/useCards";

function Main() {
	const [productBase, setProductBase] = React.useState(null)
	const {actions} = useCards()

	React.useEffect(() => {
		actions.getAll().then(r => {
			const base = Object.entries(r.data).map(([id, item]) => {
				return {
					id,
					...item
				}
			})
			setProductBase(base)
		})
	}, [])
 
	if (!productBase) return <div className={cls.loading}><Loader/></div>
	return (
		<div>
			<UnderNavbar page='Main' />
			<Slider list={sliderList} />
			<Card productList={productBase} setProductList={setProductBase} />
		</div>
	)
}

export default Main

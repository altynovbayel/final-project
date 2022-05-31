import {BsShop} from "react-icons/bs";
import {MdBakeryDining} from "react-icons/md";
import {GiCakeSlice, GiSlicedBread, GiStairsCake, GiWrappedSweet} from "react-icons/gi";

export const navbarNavigation = [

	{
		id: 0,
		route: '/',
		title: 'Главная',
	},
	{
		id: 1,
		route: '/about',
		title: 'О нас',
	},
	{
		id: 2,
		route: '/promotions',
		title: 'Акции',
	},
	{
		id: 3,
		route: '/contacts',
		title: 'Контакты',
	},
]

export const navbarCategories = [

	{
		id: 0,
		route: '/',
		title: 'Все',
		categoryImg: BsShop,
	},
	{
		id: 1,
		route: '/products/bakery',
		title: 'Хлебобулочные',
		categoryImg: GiSlicedBread,
	},
	{
		id: 2,
		route: '/products/sweets',
		title: 'Сладости',
		categoryImg: 	GiWrappedSweet,
	},
	{
		id: 3,
		route: '/',
		title: 'Пироги',
		categoryImg: GiCakeSlice,
	},
	{
		id: 4,
		route: '/',
		title: 'Торты',
		categoryImg: GiStairsCake,
	},
]
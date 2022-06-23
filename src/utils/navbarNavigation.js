import { BsShop } from 'react-icons/bs'
import {
	GiCakeSlice,
	GiSlicedBread,
	GiStairsCake,
	GiWrappedSweet,
} from 'react-icons/gi'

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
	{
		id: 4,
		route: '/favorites',
		title: 'Избранное',
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
		title: 'Мучное',
		categoryImg: GiSlicedBread,
	},
	{
		id: 2,
		route: '/products/sweets',
		title: 'Сладости',
		categoryImg: GiWrappedSweet,
	},
	{
		id: 3,
		route: '/products/pies',
		title: 'Пироги',
		categoryImg: GiCakeSlice,
	},
	{
		id: 4,
		route: '/products/cakes',
		title: 'Торты',
		categoryImg: GiStairsCake,
	},
]

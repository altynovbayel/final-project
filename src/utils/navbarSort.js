export const signsOptions = [
	{
		label: 'Все',
		value: 'all'
	},
	{
		label: 'Имени',
		value: 'name'
	},
	{
		label: 'Цене',
		value: 'price'
	},
	{
		label: 'Отзывам',
		value: 'review'
	},
]

export const categoryOptions = [

	{
		label: 'Мучное',
		value: 'bakery'
	},
	{
		label: 'Сладости',
		value: 'sweets'
	},
	{
		label: 'Пироги',
		value: 'pies'
	},
	{
		label: 'Торты',
		value: 'cakes'
	},
]

export const groupedOptions = [
	{
		label: 'Признаки',
		options: signsOptions
	},
	{
		label: 'Категории',
		options: categoryOptions
	},
]
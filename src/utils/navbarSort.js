export const signsOptions = [
	{
		label: 'Все',
		value: 'all',
		type: 'signs'
	},
	{
		label: 'Имени',
		value: 'name',
		type: 'signs'
	},
	{
		label: 'Цене',
		value: 'price',
		type: 'signs'
	},
	{
		label: 'Отзывам',
		value: 'review',
		type: 'signs'
	},
]

export const categoryOptions = [

	{
		label: 'Мучное',
		value: 'bakery',
		type: 'category'
	},
	{
		label: 'Сладости',
		value: 'sweets',
		type: 'category'
	},
	{
		label: 'Пироги',
		value: 'pies',
		type: 'category'
	},
	{
		label: 'Торты',
		value: 'cakes',
		type: 'category'
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
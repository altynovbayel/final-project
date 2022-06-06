export const signsOptions = [
	{
		label: 'Имени',
		value: 'productName',
		type: 'signs',
	},
	{
		label: 'Цене',
		value: 'price',
		type: 'signs',
	},
	{
		label: 'Отзывам',
		value: 'reviewGrade',
		type: 'signs',
	},
]

export const categoryOptions = [
	{
		label: 'Все',
		value: 'all',
		type: 'category',
	},
	{
		label: 'Мучное',
		value: 'bakery',
		type: 'category',
	},
	{
		label: 'Сладости',
		value: 'sweets',
		type: 'category',
	},
	{
		label: 'Пироги',
		value: 'pies',
		type: 'category',
	},
	{
		label: 'Торты',
		value: 'cakes',
		type: 'category',
	},
]

export const groupedOptions = [
	{
		label: 'Признаки',
		options: signsOptions,
	},
	{
		label: 'Категории',
		options: categoryOptions,
	},
]

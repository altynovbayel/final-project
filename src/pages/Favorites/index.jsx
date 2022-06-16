import React from 'react'
import cs from './Favorites.module.scss'

import Card from '../../components/Cards/Card'
import Loader from './Loader/Loader'

const Favorites = () => {
	React.useEffect(() => {
	
	}, [])

	const [state, setState] = React.useState(null)

	if (!state)
		return (
			<div className={cs.container}>
				<Loader />
			</div>
		)

	return (
		<React.Fragment>
			<h1 className={cs.favorites_text}>Избранное</h1>
			<div className={cs.favorites}>
				{state && <Card />}
			</div>
		</React.Fragment>
	)
}

export default Favorites

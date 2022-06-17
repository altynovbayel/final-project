import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes'
import ShoppingCart from './pages/ShoppingCart'
import Favorites from './pages/Favorites'
import PersonProfile from './pages/PersonProfile'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { routesList } from './utils/Routes/routeList'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path='/cart' element={<ShoppingCart />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/profile' element={<PersonProfile />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
        {
          routesList.map(item => {
            return <Route key={item.id} path={item.route} element={item.element}/>
          })
        }
			</Routes>
			<Footer />
		</>
	)
}

export default App

import Main from "./pages/Main";
import {Navigate, Route, Routes} from "react-router-dom"
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import ShoppingCart from "./pages/ShoppingCart";
import Favorites from "./pages/Favorites";
import PersonProfile from "./pages/PersonProfile";
import Promotions from "./pages/Promotions";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import More from "./pages/more";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route element={<PrivateRoutes/>}>
					<Route path='/cart' element={<ShoppingCart/>}/>
					<Route path='/favorites' element={<Favorites/>}/>
					<Route path='/profile' element={<PersonProfile/>}/>
					<Route path='*' element={<Navigate to='/'/>}/>
				</Route>
				<Route path='/' element={<Main/>}/>
				<Route path='/products/:category' element={<Category/>} />
				<Route path='products/:category/:id' element={<More/>} />
				<Route path='/promotions' element={<Promotions/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/contacts' element={<Contacts/>}/>
				<Route path='*' element={<Navigate to='/'/>}/>
			</Routes>
		</>
	);
}

export default App;

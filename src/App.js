import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path='*' element={<Navigate to='/'/> } />
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path={'/cart'} element={<ShoppingCart/>}/>
    </Routes>
  );
}

export default App;

import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path='*' element={<Navigate to='/'/> } />
      <Route path={'/cart'} element={<ShoppingCart/>}/>
    </Routes>
  );
}

export default App;

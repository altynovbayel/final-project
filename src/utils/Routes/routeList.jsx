import Main from "../../pages/Main"
import Register from "../../pages/Register"
import Auth from '../../pages/Auth'
import Category from "../../pages/Category"
import More from "../../pages/more"
import Promotions from "../../pages/Promotions"
import About from "../../pages/About"
import Contacts from "../../pages/Contacts"
import { Navigate } from "react-router-dom"


export const routesList = [
  {
    id: 1,
    route: '/',
    element: <Main />,
  },
  {
    id: 2,
    route: '/user/register',
    element: <Register />,
  },
  {
    id: 3,
    route: '/user/auth',
    element: <Auth />,
  },
  {
    id: 4,
    route: '/user/register',
    element: <Register />,
  },
  {
    id: 5,
    route: '/products/:category',
    element: <Category />,
  },
  {
    id: 6,
    route: '/products/:category/:id',
    element: <More />,
  },
  {
    id: 7,
    route: '/promotions',
    element: <Promotions />,
  },
  {
    id: 8,
    route: '/about',
    element: <About />,
  },
  {
    id: 9,
    route: '/contacts',
    element: <Contacts />,
  },
  {
    id: 10,
    route: '*',
    element: <Navigate to='/' />,
  },
]
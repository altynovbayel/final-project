import React from 'react';
import {getFromCart} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";
import cls from "../Main/main.module.scss";
import Loader from "../Favorites/Loader/Loader";
import Title from "../../components/UI/TitleText";
import CartCard from "../../components/CartCards";


function ShoppingCart() {
  const [base, setBase] = React.useState(null)
  const {isAuth} = useIsLogin()
  React.useEffect(() => {
    getFromCart(isAuth.uid).then(res => {
      const arr = res.data ? Object.entries(res.data).map(([id, item]) => {
        return{
          id,
          ...item
        }
      }) : false
      setBase(arr)
    })
  }, [])
  
  if (base === false) return <Title text={'ваша карзина пустая'}/>
  if(!base) return <div className={cls.loading}><Loader/></div>
  return (
    <React.Fragment>
      <Title text={"Ваша корзина"}/>
      {
        <CartCard productList={base} setProductList={setBase}/>
      }
    </React.Fragment>
  );
}

export default ShoppingCart

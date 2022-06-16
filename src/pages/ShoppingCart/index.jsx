import React from 'react';
import {getFromCart} from "../../configs";
import useIsLogin from "../../hooks/useIsLogin";
import cls from "../Main/main.module.scss";
import Loader from "../Favorites/Loader/Loader";
import Card from "../../components/Cards/Card";
import Title from "../../components/UI/TitleText";


function ShoppingCart() {
  const [base, setBase] = React.useState(null)
  const {isAuth} = useIsLogin()
  React.useEffect(() => {
    getFromCart(isAuth.uid).then(res => {
      const arr = Object.values(res.data)
      setBase(arr)
    })
  }, [])
  
  
  if(!base) return <div className={cls.loading}><Loader/></div>
  return (
    <React.Fragment>
      <Title text={"Ваша карзина"}/>
      {
        <Card productList={base} setProductList={setBase}/>
      }
    </React.Fragment>
  );
}

export default ShoppingCart;
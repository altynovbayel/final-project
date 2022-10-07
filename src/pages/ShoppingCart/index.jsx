import React from 'react'
import { getFromCart, removeAllCart } from '../../configs'
import useIsLogin from '../../hooks/useIsLogin'
import cls from '../Main/main.module.scss'
import Loader from '../../components/Loader/Loader'
import Title from '../../components/UI/TitleText'
import CartCard from '../../components/CartCards'
import EmptyData from '../../components/UI/EmptyData/EmptyData'
import c from './ShoppingCart.module.scss'
import { updateProfile } from 'firebase/auth'
import useAlert from '../../hooks/useAlert'
import Button from "../../components/UI/Button";


function ShoppingCart() {
	const [base, setBase] = React.useState(null)
  const { isAuth, setMoneySum } = useIsLogin()
  const { actions } = useAlert()
	function getCard() {
		getFromCart(isAuth.uid).then((res) => {
			const arr = res.data
				? Object.values(res.data)
				: false
			setBase(arr)
		})
	}

  function removeAll() {
    actions.sweetAlert('Удалено всё из корзины').then()
    removeAllCart(isAuth?.uid).then(r => r && getCard())
    updateProfile(isAuth?.uid, {totalPrice:0}).then()
    setMoneySum(0)
  }

	React.useEffect(() => {
		getCard()
	}, [isAuth?.uid])

  function handleOrder(){
    actions.sweetAlert('Ваш заказ обрабатывается').then()
  }

	if (base === false) return <EmptyData text={'Ваша корзина пустая'} />
	if (!base) return <div className={cls.loading}> <Loader /> </div>
	return (
		<React.Fragment>
      <Title text={'Ваша корзина'} />
      <div className={c.btn}> 
        <button onClick={removeAll}>удалить всё</button>
      </div>
			{
				<CartCard
					productList={base}
					setProductList={setBase}
					getCard={getCard}
				/>
			}
      <div className={c.order}>
        {/*<button onClick={handleOrder}>Заказать</button>*/}
        <Button buttonText={'Заказать'} onClick={handleOrder}/>
      </div>
		</React.Fragment>
	)
}

export default ShoppingCart

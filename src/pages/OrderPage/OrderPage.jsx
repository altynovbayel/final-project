import React from 'react';
import useIsLogin from "../../hooks/useIsLogin";
import cls from "./OrderPage.module.scss";
import UserCredentials from "./components/UserCredentials";
import {getSingleOrderedProduct, getUser, removeAllCart} from "../../configs";
import Button from "../../components/UI/Button";
import {useNavigate} from "react-router-dom";
import ProductCredentials from "./components/ProductCredentials";
import Loader from "../Favorites/Loader/Loader";
import PropertyCredentials from "./components/PropertyCredentials";

const OrderPage = () => {
	const {isAuth} = useIsLogin()
	const [userData, setUserData] = React.useState(null)
	const [productsData, setProductsData] = React.useState(null)
	const navigate = useNavigate('/')

	React.useEffect(() => {
			getUser(isAuth?.uid).then(r => r.data && setUserData(r.data))
			getSingleOrderedProduct(isAuth?.uid, localStorage.getItem('orderId'))
				.then(r => setProductsData(r.data))
				.then(() => removeAllCart(isAuth?.uid))
		},
		[isAuth?.uid])

	if (!productsData) return <div className={cls.loading}><Loader/></div>
	return (
		<section className={cls.root}>
			<div className={cls.userCredentials}>
				<div className={cls.header}>
					<h3>{isAuth.displayName}, спасибо, ваш заказ принят!</h3>
					<p>В течение 5 минут с вами свяжется наш оператор</p>
				</div>
				<div className={cls.body}>
					<UserCredentials property={'Ваше имя'} value={isAuth?.displayName}/>
					<UserCredentials property={'Телефон'} value={userData?.phoneNumber}/>
					<UserCredentials property={'Адрес принятия товара'} value={'Ош, ул. Мамырова'}/>
				</div>
				<div className={cls.footer}>
					<Button
						buttonText={'На главную'}
						onClick={() => navigate('/')}
						style={{width: '100%'}}
					/>
				</div>
			</div>
			<div className={cls.productsCredentials}>
				<div className={cls.header}>
					<div className={cls.logoText}>
						<h4>Ваш чек</h4>
						<p>{productsData.date}</p>
					</div>
				</div>
				<div className={cls.body}>
					{
						productsData.products.map((product, index) => (
							<ProductCredentials
								key={product.id}
								productName={product.productName}
								count={product.count}
								totalPriceOfProduct={product.price * product.count}
								id={index}
							/>
						))
					}
				</div>
				<div className={cls.footer}>
					<div className={cls.top}>
						<PropertyCredentials
							key={productsData.fullPrice}
							property={'Все товары'}
							value={`${productsData.fullPrice} c`}
						/>
						<PropertyCredentials property={'Способ оплаты'} value={'Наличные'}/>
					</div>
					<div className={cls.bottom}>
						<PropertyCredentials
							fontWeight={700}
							color={'#222'}
							property={'Итого'}
							value={`${productsData.fullPrice} c`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrderPage;

import React from 'react';
import cls from "./OrdersHistory.module.scss";
import {cancelOrderFromHistory, deleteOrderFromHistory, getHistoryOrderedProducts} from "../../../configs";
import useIsLogin from "../../../hooks/useIsLogin";
import {parserJson} from "../../../helpers/parserJson";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loader from "../../Favorites/Loader/Loader";
import EmptyData from "../../../components/UI/EmptyData/EmptyData";
import Button from "../../../components/UI/Button";
import {useNavigate} from "react-router-dom";
import {VscRefresh} from "react-icons/vsc";
import Loading from "../../../components/UI/Loading/Loading";
import {AiFillDelete} from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}


const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const OrdersHistory = () => {
	const {isAuth} = useIsLogin()
	const [historyData, setHistoryData] = React.useState(null)
	console.log(historyData)
	const [loading, setLoading] = React.useState(false)
	const navigate = useNavigate()

	const getHistory = (userId) => {
		setLoading(true)
		getHistoryOrderedProducts(userId).then(r => {
			if (r.data){
				setHistoryData(parserJson(r.data))
			}else {
				setHistoryData([])
			}
		})
			.finally(() => {
				setLoading(false)
			})
	}

	const deleteOrder = orderId => {
		deleteOrderFromHistory(isAuth?.uid, orderId).then(() => {
			getHistory(isAuth?.uid)
		})
	}

	const cancelOrder = orderId => {
		cancelOrderFromHistory(isAuth?.uid, orderId).then((r) => {
			getHistory(isAuth?.uid)
		})
	}

	React.useEffect(() => {
		getHistory(isAuth?.uid)
	}, [isAuth?.uid])

	if(!historyData) return <div className={cls.loading}><Loader/></div>
	if(historyData.length === 0) return <div className={cls.empty}>
		<EmptyData text={'Нет заказов'}/>
		<Button
			buttonText={'Перейти к покупкам'}
			style={{width: '30%', fontWeight: 500}}
			onClick={() => navigate('/')}
		/>
	</div>

	return (
		<div className={cls.root}>
			<div className={cls.refresh}>
				<VscRefresh title={'Обновить таблицу'} onClick={() => getHistory(isAuth?.uid)}  />
			</div>
			<TableContainer component={Paper} sx={{background: '#fcfcfc',border: '1px solid #888', padding: '10px', width: '93vw'}}>
				{
					!loading ? (
						<Table aria-label="simple table" sx={{minWidth: 750}	}>
							<TableHead>
								<TableRow>
									<TableCell align="center">№</TableCell>
									<TableCell align="center">Дата</TableCell>
									<TableCell align="center">Статус</TableCell>
									<TableCell align="center">Способ оплаты</TableCell>
									<TableCell align="center">Общая сумма</TableCell>
									<TableCell align="center">Удалить</TableCell>
									<TableCell align="center">Отменить</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									historyData.map((order, i) => (
									<TableRow
										key={order.id}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell align="center">{++i}</TableCell>
										<TableCell align="center">{order.date}</TableCell>
										<TableCell align="center">{order.orderState ? 'Готов' : 'В ожидании'}</TableCell>
										<TableCell align="center">Наличные</TableCell>
										<TableCell align="center">{order.fullPrice} c</TableCell>
										<TableCell align="center">
											{
												order.orderState
											? <AiFillDelete onClick={() => deleteOrder(order.id)}/>
											: <AiFillDelete style={{opacity: 0.3}}/>
										}
										</TableCell>
										<TableCell align="center">
											{!order.orderState
												? <GrFormClose style={{fontSize: 22}} onClick={() => cancelOrder(order.id)}/>
												: <GrFormClose style={{fontSize: 22, opacity: 0.3}}/>
											}
										</TableCell>
									</TableRow>
								))
								}
							</TableBody>
						</Table>
					) : <div className={cls.loadingTable}><Loading/></div>
				}
			</TableContainer>
		</div>
	);
};

export default OrdersHistory;

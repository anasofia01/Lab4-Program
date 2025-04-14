import { use, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import ProtectedRoute from './components/protectedRouter';
import MyOrdersPage from './pages/myOrders';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import LoginPage from './pages/login';
import AccessDeniedPage from './pages/accessDenied';
import { Alert, Snackbar } from '@mui/material';

function App() {
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		const message = localStorage.getItem('access-denied');
		if (message) {
			setAlert(true);
			localStorage.removeItem('access-denied');
		}
	}, []);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/access-denied' element={<AccessDeniedPage />} />
				<Route
					path='/my-orders'
					element={
						<ProtectedRoute>
							<MyOrdersPage />
						</ProtectedRoute>
					}
				/>
			</Routes>
			<Snackbar open={alert} autoHideDuration={4000} onClose={() => setAlert(false)}>
				<Alert severity='error' variant='filled'>
					Access Denied. Please Login
				</Alert>
			</Snackbar>
		</>
	);
}

export default App;

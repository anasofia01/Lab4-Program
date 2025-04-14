import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const MyOrdersPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
		setOrders(savedOrders);
	}, []);

	const removeOrder = (productId) => {
		const updatedOrders = orders.filter((order) => order.id !== productId);
		setOrders(updatedOrders);
		localStorage.setItem('orders', JSON.stringify(updatedOrders));
	};

	return (
		<Container sx={{ mt: 6, textAlign: 'center' }}>
			<Typography variant='h4' gutterBottom>
				My Orders
			</Typography>
			<Typography variant='body1' sx={{ mb: 4 }}>
				Here you can view your makeup purchase history.
			</Typography>

			{orders.length === 0 ? (
				<Paper
					elevation={3}
					sx={{
						maxWidth: 400,
						margin: '0 auto',
						padding: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 4,
						color: 'text.secondary',
					}}
				>
					<ShoppingBagOutlinedIcon sx={{ fontSize: 60, mb: 2 }} />
					<Typography variant='body2'>You have no orders yet.</Typography>
				</Paper>
			) : (
				<Grid container spacing={3}>
					{orders.map((product) => (
						<Grid item xs={12} sm={6} md={4} key={product.id}>
							<Card sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 3 }}>
								<CardMedia
									component='img'
									image={product.image}
									alt={product.name}
									sx={{ width: 80, height: 80, borderRadius: 2, mr: 2 }}
								/>
								<CardContent sx={{ flex: 1, p: 0 }}>
									<Typography variant='subtitle1' fontWeight='bold'>
										{product.name}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{product.price}
									</Typography>
								</CardContent>
								<Button variant='outlined' color='error' onClick={() => removeOrder(product.id)} sx={{ ml: 2 }}>
									Remove
								</Button>
							</Card>
						</Grid>
					))}
				</Grid>
			)}

			<Button variant='contained' component={Link} to='/products' sx={{ mt: 4 }}>
				Back to Products
			</Button>
		</Container>
	);
};

export default MyOrdersPage;

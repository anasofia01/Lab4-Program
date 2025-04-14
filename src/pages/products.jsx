import React from 'react';
import { products } from '../data/products';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProductsPage = () => {
	const handleAddToOrders = (product) => {
		let currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
		currentOrders.push(product);
		localStorage.setItem('orders', JSON.stringify(currentOrders));
		alert(`${product.name} has been added to your orders!`);
	};

	return (
		<Container sx={{ mt: 6 }}>
			<Typography variant='h4' gutterBottom>
				Products:
			</Typography>

			<Grid container spacing={3} columns={12}>
				{products.map((product) => (
					<Grid key={product.id}>
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
								<Button variant='contained' color='primary' onClick={() => handleAddToOrders(product)} sx={{ mt: 2 }}>
									Add to Orders
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ProductsPage;

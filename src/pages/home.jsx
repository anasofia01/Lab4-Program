import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundImage:
					'url(https://cdn-azure.notinoimg.com/cdn-cgi/image/w=1040,q=80/blog/article/blog_novinkymakeupZaFue0267ret169_f8f004.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: '#fff',
			}}
		>
			<Container maxWidth='sm' sx={{ bgcolor: 'white', p: 4, borderRadius: 3 }}>
				<Typography variant='h3' gutterBottom sx={{ color: 'black' }}>
					Welcome to Glamour Boutique
				</Typography>
				<Typography variant='body1' sx={{ mb: 3, color: 'black' }}>
					Discover our exclusive collection of makeup products designed to enhance your beauty and confidence. From bold
					lipsticks to flawless foundations — find your perfect look today.
				</Typography>
				<Button variant='contained' component={Link} to='/products' size='large'>
					Explore Products
				</Button>
			</Container>
		</Box>
	);
};

export default HomePage;

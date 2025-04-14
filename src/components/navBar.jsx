import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();
	const isAuth = localStorage.getItem('auth') === 'true';

	const handlerLogout = () => {
		localStorage.removeItem('auth');
		navigate('/');
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: '#111', boxShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					variant='h6'
					component={Link}
					to='/'
					sx={{ textDecoration: 'none', color: 'white', fontWeight: 600 }}
				>
					Glamour Boutique
				</Typography>

				<Box>
					<Button component={Link} to='/' sx={{ color: 'white', mx: 1 }}>
						Home
					</Button>
					<Button component={Link} to='/products' sx={{ color: 'white', mx: 1 }}>
						Products
					</Button>
					<Button component={Link} to='/my-orders' sx={{ color: 'white', mx: 1 }}>
						My Orders
					</Button>
					{isAuth ? (
						<Button onClick={handlerLogout} sx={{ color: '#ff4081', mx: 1 }}>
							Logout
						</Button>
					) : (
						<Button component={Link} to='/login' sx={{ color: '#ff4081', mx: 1 }}>
							Login
						</Button>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;

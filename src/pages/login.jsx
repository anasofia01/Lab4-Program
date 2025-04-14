import { useState } from 'react';
import { Button, Container, TextField, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlerLogin = () => {
		if (!email || !password) return;
		localStorage.setItem('auth', 'true');
		localStorage.setItem('userEmail', email);
		navigate('/my-orders');
	};

	return (
		<Container maxWidth='sm' sx={{ mt: 8 }}>
			<Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
				<Typography variant='h4' gutterBottom align='center'>
					Login
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
					<TextField
						variant='outlined'
						label='Email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
					/>
					<TextField
						variant='outlined'
						label='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						fullWidth
					/>
					<Button variant='contained' color='primary' onClick={handlerLogin} size='large'>
						Login
					</Button>
				</Box>
			</Paper>
		</Container>
	);
};

export default LoginPage;

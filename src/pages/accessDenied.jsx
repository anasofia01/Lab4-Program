import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BlockIcon from '@mui/icons-material/Block';

const AccessDeniedPage = () => {
	return (
		<Container sx={{ mt: 8, textAlign: 'center' }}>
			<BlockIcon sx={{ fontSize: 80, color: 'error.main' }} />
			<Typography variant='h4' gutterBottom>
				Access Denied
			</Typography>
			<Typography variant='body1' sx={{ mb: 4 }}>
				You must log in to access this page.
			</Typography>
			<Box>
				<Button
					variant='contained'
					component={Link}
					to='/login'
					sx={{
						mr: 2,
						backgroundColor: 'primary.main',
						color: 'white',
						'&:hover': { backgroundColor: 'primary.dark' },
					}}
				>
					Login
				</Button>
				<Button
					variant='outlined'
					component={Link}
					to='/'
					sx={{
						borderColor: 'primary.main',
						color: 'primary.main',
						'&:hover': { borderColor: 'primary.dark', backgroundColor: 'primary.light' },
					}}
				>
					Home
				</Button>
			</Box>
		</Container>
	);
};

export default AccessDeniedPage;

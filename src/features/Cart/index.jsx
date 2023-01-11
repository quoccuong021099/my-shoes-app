import { Box, Container, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBackIcon, CartIcon } from '../../components/icons';
import ListCart from '../../components/ListCart';

export default function Cart() {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          fontSize={40}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <CartIcon sx={{ fontSize: 40, mr: 1 }} />
          <span>Cart</span>
        </Typography>
        <Link to="/">
          <IconButton sx={{ '&: hover': { backgroundColor: '#000' } }}>
            <ArrowBackIcon color="white" sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </Box>
      <Box mt={1}>
        <ListCart />
      </Box>
    </Container>
  );
}

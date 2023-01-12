import { Box, Container, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BackHomeButton from '../../components/BackHomeButton';
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
        <BackHomeButton />
      </Box>
      <Box mt={1}>
        <ListCart />
      </Box>
    </Container>
  );
}

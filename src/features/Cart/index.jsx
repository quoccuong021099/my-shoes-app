/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Snackbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackHomeButton from '../../components/BackHomeButton';
import { CartIcon } from '../../components/icons';
import ListCart from '../../components/ListCart';
import Loading from '../../components/Loading';
import NoProduct from '../../components/NoProduct';
import AlertCommon from '../AlertCommon';
import {
  deleteCartItem,
  getCart,
  selectDataCart,
  selectStatusCart,
} from './cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const triggerDeleteCartItem = (id) => dispatch(deleteCartItem(id));

  const { isLoading } = useSelector(selectStatusCart);
  const data = useSelector(selectDataCart);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getCart());
    }
  }, []);

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
      <AlertCommon />
      <Box mt={1}>
        {isLoading ? (
          <Loading width={50} />
        ) : (
          <>
            {data?.length > 0 ? (
              <ListCart
                data={data}
                triggerDeleteCartItem={triggerDeleteCartItem}
              />
            ) : (
              <NoProduct />
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

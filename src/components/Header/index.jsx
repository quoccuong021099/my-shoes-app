/* eslint-disable react-hooks/exhaustive-deps */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from '../../features/Cart/cartSlice';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header({ isLogin }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      dispatch(getCart());
    }
  }, [isLogin]);
  return (
    <>
      <AppBar
        sx={{
          minHeight: {
            xs: '64px',
            md: '76px',
          },
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <HeaderLeft />
            <HeaderRight isLogin={isLogin} />
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ minHeight: { xs: '64px', md: '76px' } }} />
    </>
  );
}
export default Header;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <>
      <AppBar sx={{ minHeight: '64px' }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <HeaderLeft />
            <HeaderRight />
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ minHeight: '64px' }} />
    </>
  );
}
export default Header;

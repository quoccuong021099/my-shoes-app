import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import React, { useState } from 'react';
import images from '../../../assets/images';
import { MenuIcon } from '../../icons';
import ListBrand from './ListBrand';
import LogoShoes from './LogoShoes';

const listBrand = [
  { label: 'Nike', icon: images.nikeIcon },
  { label: 'Adidas', icon: images.adidasIcon },
  { label: 'Jordan', icon: images.jordanIcon },
  { label: 'Other brands', icon: images.otherBrand },
];

export default function HeaderLeft() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <>
      {/* table -> pc */}
      <Box
        sx={{
          alignItems: 'center',
          flex: 1,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <LogoShoes color="#fff" />

        <Box sx={{ display: 'flex', marginX: 1 }}>
          <ListBrand
            data={listBrand}
            style={() => ({
              color: 'white',
              display: 'block',
              textDecoration: 'none',
              marginX: 2,
            })}
          />
        </Box>
      </Box>
      {/* mobile */}
      <Box
        sx={{
          alignItems: 'center',
          flex: 1,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(event) => setAnchorElNav(event.currentTarget)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={() => setAnchorElNav(null)}
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <LogoShoes />
          <Divider />
          <ListBrand
            data={listBrand}
            style={() => ({
              display: 'flex',
              textDecoration: 'none',
              alignItems: 'center',
            })}
            isImg
          />
        </Menu>
      </Box>
    </>
  );
}

import { Badge, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link as LinkTo } from 'react-router-dom';
import { CartIcon, LogoutIcon, PersonIcon } from '../icons';
import images from '../../assets/images';
import Login from '../../features/Login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/Login/loginSlice';
import { selectlengthCart } from '../../features/Cart/cartSlice';
export default function HeaderRight({ isLogin }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = [
    { label: 'Profile', icon: PersonIcon, link: '/' },
    { label: 'Cart', icon: CartIcon, link: '/cart' },
  ];

  const dispatch = useDispatch();
  const cartNumber = useSelector(selectlengthCart);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(logout());
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: 'flex',
        minWidth: 150,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {!isLogin ? (
        <Login />
      ) : (
        <>
          <Tooltip title="Cart">
            <IconButton sx={{ mr: 2 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Typography
                    color="error"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'red',
                      color: '#fff',
                      borderRadius: '50%',
                      fontSize: '0.8rem',
                      width: 18,
                      height: 18,
                    }}
                  >
                    {cartNumber}
                  </Typography>
                }
              >
                <LinkTo to="/cart">
                  <CartIcon color="white" fontSize="large" />
                </LinkTo>
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton
              onClick={(event) => setAnchorElUser(event.currentTarget)}
              sx={{
                p: 0.4,
                backgroundColor: '#fff',
                '&: hover': {
                  backgroundColor: '#fff',
                },
              }}
            >
              <Avatar
                alt="Quoc Cuong"
                src={images.personIcon}
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            keepMounted
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, idx) => {
              const IconComp = setting.icon;
              return (
                <MenuItem
                  key={idx}
                  onClick={handleCloseUserMenu}
                  sx={{
                    // width: 150,
                    maxWidth: '100%',
                    padding: 0,
                  }}
                >
                  <Link
                    to={setting.link}
                    component={LinkTo}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      width: '100%',
                      padding: '8px 16px',
                    }}
                  >
                    <IconComp />
                    <Typography sx={{ marginLeft: 1.5 }}>
                      {setting.label}
                    </Typography>
                  </Link>
                </MenuItem>
              );
            })}
            <MenuItem
              onClick={handleLogOut}
              sx={{
                width: 150,
                maxWidth: '100%',
              }}
            >
              <LogoutIcon />
              <Typography sx={{ marginLeft: 1.5 }}>Log Out</Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
}

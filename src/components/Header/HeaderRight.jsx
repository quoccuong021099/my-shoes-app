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
const settings = [
  { label: 'Profile', icon: PersonIcon },
  { label: 'Cart', icon: CartIcon },
  { label: 'Logout', icon: LogoutIcon },
];
export default function HeaderRight() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{
        flexGrow: 0,
        display: 'flex',
        minWidth: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
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
              5
            </Typography>
          }
        >
          <CartIcon color="white" />
        </Badge>
      </IconButton>
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
                width: 150,
                maxWidth: '100%',
              }}
            >
              <Link
                to="/"
                component={LinkTo}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
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
      </Menu>
    </Box>
  );
}

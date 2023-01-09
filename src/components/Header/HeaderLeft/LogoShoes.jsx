import { Link } from '@mui/material';
import React from 'react';
import { Link as LinkTo } from 'react-router-dom';
import images from '../../../assets/images';

export default function LogoShoes({ color, ...rest }) {
  return (
    <Link
      to="/"
      component={LinkTo}
      sx={(theme) => ({
        display: 'flex',
        marginX: 1,
        borderRadius: 6,
        p: 1,
        textDecoration: 'none',
        color: color || theme.palette.primary.main,
      })}
      {...rest}
    >
      <img src={images.logo} alt="logo" width={120} height={60} />
    </Link>
  );
}

import { Link } from '@mui/material';
import React from 'react';
import { Link as LinkTo } from 'react-router-dom';
import { ShoesIcon } from '../../icons';

export default function LogoShoes({ color }) {
  return (
    <Link
      to="/"
      component={LinkTo}
      sx={(theme) => ({
        display: 'flex',
        marginX: 1,
        border: '1px dotted #ccc',
        borderRadius: 6,
        p: 1,
        m: 1,
        mt: 0,
        textDecoration: 'none',
        color: color || theme.palette.primary.main,
      })}
    >
      <ShoesIcon />
      &nbsp; <span>Run with me</span>
    </Link>
  );
}

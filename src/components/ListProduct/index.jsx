import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DoubleArrowIcon } from '../icons';
import ProductItem from './ProductItem';

export default function ListProduct({ title }) {
  return (
    <Box mt={5}>
      <Typography
        sx={{
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        <DoubleArrowIcon fontSize="medium" />
        <b>{title.toUpperCase()}</b>
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        sx={{
          flexWrap: 'wrap',
        }}
      >
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Stack>
    </Box>
  );
}

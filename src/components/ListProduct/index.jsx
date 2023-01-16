import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AlertCommon from '../../features/AlertCommon';
import { DoubleArrowIcon } from '../icons';
import NoProduct from '../NoProduct';
import ProductItem from './ProductItem';

export default function ListProduct({
  title = 'Product',
  listProducts,
  triggerAddCart,
  isLogin,
}) {
  return (
    <Box mt={5}>
      <Typography
        sx={{
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          fontSize: '24px',
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
        {listProducts.length > 0 ? (
          listProducts.map((item, index) => (
            <ProductItem
              data={item}
              key={index}
              triggerAddCart={triggerAddCart}
              isLogin={isLogin}
            />
          ))
        ) : (
          <NoProduct width={400} height={300} />
        )}
      </Stack>
      <AlertCommon />
    </Box>
  );
}

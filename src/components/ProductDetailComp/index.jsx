/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { useState } from 'react';
import { Link as LinkTo } from 'react-router-dom';
import { convertCurrency, replacePrice } from '../../common/convertCurrency';
import { AddCartIcon, ShoppingIcon } from '../../components/icons';
import Login from '../../features/Login';
import ListSize from './ListSize';

export default function DetailProductComp({ data, triggerAddcCart, isLogin }) {
  const [quantity, setQuantity] = useState(1);
  const [valueSize, setValueSize] = useState(data[0]?.size?.split(' ')[0]);

  const onAddCart = () => {
    triggerAddcCart({ id: data[0]?.id, qty: quantity, size: valueSize });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Box display="flex" justifyContent="center" my={{ xs: 2, lg: 0 }}>
        <CardMedia
          component="img"
          sx={{
            width: { xs: 300, xl: 500 },
            height: { xs: 300, xl: 500 },
            backgroundColor: '#fff',
            p: 1,
            textAlign: 'center',
          }}
          image={data[0]?.image}
          alt={data[0]?.name}
        />
      </Box>
      <CardContent
        sx={{
          color: '#fff',
          flex: 1,
          py: { xs: 1, md: 0 },
          px: { xs: 0, md: 1 },
          pr: { xs: 0, md: 0 },
        }}
      >
        <Rating
          name="read-only"
          value={data[0]?.star || 0}
          readOnly
          size="large"
        />
        <Typography component="h5" variant="h5">
          Name: {data[0]?.name}
        </Typography>
        <Typography component="h5" variant="h5">
          Price:{' '}
          <Typography
            component="span"
            variant="subtitle1"
            color="white"
            sx={{ mr: 2, textDecoration: 'line-through' }}
          >
            <b>{convertCurrency(+replacePrice(data[0]?.price))}</b>
          </Typography>
          <Typography component="span" variant="h5" color="error">
            <b>
              {convertCurrency(
                +replacePrice(data[0]?.price) -
                  (data[0]?.discount * +replacePrice(data[0]?.price)) / 100,
              )}
            </b>
          </Typography>
        </Typography>

        <Divider orientation="horizontal" color="primary" sx={{ my: 2 }} />

        <ListSize
          data={data[0]?.size?.split(' ')}
          valueSize={valueSize}
          setValueSize={setValueSize}
        />

        <Divider orientation="horizontal" color="primary" sx={{ my: 2 }} />

        <Typography
          variant="subtitle1"
          component="div"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography variant="subtitle1" component="span">
            Quantity:
          </Typography>
          <Box ml={1}>
            <Button
              color="error"
              variant="contained"
              sx={{ padding: 0, minWidth: 25 }}
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </Button>
            <Typography variant="subtitle1" component="span" sx={{ mx: 1 }}>
              {quantity}
            </Typography>
            <Button
              color="third"
              variant="contained"
              sx={{ padding: 0, minWidth: 25 }}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </Button>
          </Box>
        </Typography>

        <Divider orientation="horizontal" color="primary" sx={{ my: 2 }} />
        {isLogin ? (
          <Stack direction="row">
            <Button
              color="third"
              variant="contained"
              fullWidth
              onClick={onAddCart}
            >
              <AddCartIcon fontSize="small" sx={{ mr: 1 }} />
              <span> Add to cart</span>
            </Button>
            &nbsp;
            <Button color="secondary" variant="contained" fullWidth>
              <Link
                component={LinkTo}
                to="/order"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ShoppingIcon fontSize="small" sx={{ mr: 1 }} />
                <span>Order now</span>
              </Link>
            </Button>
          </Stack>
        ) : (
          <Login title="log in to order" sx={{ mx: 0 }} />
        )}

        <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
          Hoặc đặt mua:{' '}
          <Typography component="span" variant="h6" color="error">
            19000009
          </Typography>{' '}
          (Tư vấn Miễn phí)
        </Typography>
      </CardContent>
    </Box>
  );
}

import { Button, Divider, IconButton, Rating, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../../assets/images';
import { convertCurrency } from '../../../common/convertCurrency';
import { AddCartIcon } from '../../icons';
export default function ProductItem({ data, triggerAddCart, isLogin }) {
  const { name, price, discount, image, star, id, size } = data;

  const newPrice = price.replaceAll(/[.,]/g, '');

  const priceWithDiscount = newPrice - (discount * newPrice) / 100;

  const navigate = useNavigate();

  const handleAddCart = () => {
    triggerAddCart({ id, qty: 1, size: size?.split(' ')[0] });
  };

  return (
    <Card
      sx={{
        width: {
          xl: 'calc(20% - 16px)',
          lg: 'calc(25% - 16px)',
          md: 'calc(33.333% - 16px)',
          xs: 'calc(50% - 16px)',
        },
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: 1,
        alignSelf: 'normal',
        border: '3px solid transparent',
        '&:hover': { animation: '.5s ease-in infinite tim' },
        position: 'relative',
        backgroundColor: '#ececec',
      }}
    >
      {discount >= 15 && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            animation: '.5s ease-in infinite tim',
            borderRadius: '50%',
            border: '3px solid transparent',
          }}
        >
          <img src={images.hotDeal} alt="hot Deal" width="50px" height="50px" />
        </Box>
      )}

      {isLogin && (
        <Tooltip title="Add to cart" onClick={handleAddCart}>
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              backgroundColor: '#0288d1',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#0288d1',
              },
            }}
          >
            <AddCartIcon />
          </IconButton>
        </Tooltip>
      )}

      <CardContent sx={{ width: '100%' }}>
        <CardMedia component="img" height="180" image={image} alt={name} />
        <Divider sx={{ my: 1 }} />
        <Typography>{name}</Typography>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={1}
          >
            <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
              {discount === 0 ? '' : convertCurrency(+newPrice)}
            </Typography>
            <Typography color="red" variant="h6">
              <b>{convertCurrency(priceWithDiscount)}</b>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Box
        sx={{
          py: 1,
          px: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 'auto',
          width: '100%',
        }}
      >
        <Rating name="read-only" value={star || 0} readOnly size="small" />
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => navigate(`/product/${id}`)}
        >
          Book now
        </Button>
      </Box>
    </Card>
  );
}

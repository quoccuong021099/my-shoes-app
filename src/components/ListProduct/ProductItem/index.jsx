import { Button, Divider, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import images from '../../../assets/images';
export default function ProductItem({ data }) {
  const { name, price, discount, image, star } = data;
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
            right: 0,
            animation: '.5s ease-in infinite tim',
            borderRadius: '50%',
            border: '3px solid transparent',
          }}
        >
          <img src={images.hotDeal} alt="hot Deal" width="50px" height="50px" />
        </Box>
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
              {price}đ
            </Typography>
            <Typography color="red" variant="h6">
              <b>{price}đ</b>
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
        <Button size="small" color="secondary" variant="contained">
          Book now
        </Button>
      </Box>
    </Card>
  );
}

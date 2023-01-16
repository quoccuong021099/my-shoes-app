import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { convertCurrency, replacePrice } from '../../common/convertCurrency';
import { CloseIcon } from '../icons';

export default function CartItem({ data, triggerDeleteCartItem }) {
  const { image, name, size, qty, price, id, star } = data;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#000',
        my: 1,
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        position: 'relative',
      }}
    >
      <Tooltip
        title="Delete this item"
        sx={{ position: 'absolute', right: 0, top: 0 }}
      >
        <IconButton onClick={() => triggerDeleteCartItem(id)}>
          <CloseIcon color="error" />
        </IconButton>
      </Tooltip>
      <Box sx={{ backgroundColor: '#000', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{
            width: 151,
            backgroundColor: '#fff',
            p: 1,
            '&:hover': { cursor: 'pointer' },
          }}
          image={image}
          alt="Live from space album cover"
          onClick={handleNavigate}
        />
        <CardContent sx={{ color: '#fff', py: 0 }}>
          <Rating name="read-only" value={star || 0} readOnly size="large" />
          <Typography
            component="h5"
            variant="h5"
            onClick={handleNavigate}
            sx={{
              '&:hover': { cursor: 'pointer', textDecoration: 'underline' },
            }}
          >
            Name: {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Size: {size}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Quantity: {qty}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Price: {convertCurrency(+replacePrice(price))}
          </Typography>
        </CardContent>
      </Box>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          p: 0,
        }}
      >
        <Typography color="white.main" sx={{ lineHeight: 2 }} variant="h6">
          Total price
        </Typography>
        <Typography color="error" variant="h5" sx={{ lineHeight: 2 }}>
          {convertCurrency(+replacePrice(price) * qty)}
        </Typography>
        <Button color="secondary" variant="contained">
          Order now
        </Button>
      </CardActions>
    </Card>
  );
}

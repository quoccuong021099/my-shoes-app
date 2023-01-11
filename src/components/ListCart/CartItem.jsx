import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import images from '../../assets/images';
import { CloseIcon } from '../icons';
export default function CartItem() {
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
        <IconButton>
          <CloseIcon color="error" />
        </IconButton>
      </Tooltip>
      <Box sx={{ backgroundColor: '#000', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151, backgroundColor: '#fff', p: 1 }}
          image={images.adidasIcon}
          alt="Live from space album cover"
        />
        <CardContent sx={{ color: '#fff', py: 0 }}>
          <Typography component="h5" variant="h5">
            Name: Live From Space
          </Typography>
          <Typography variant="subtitle1" component="div">
            Size: Mac Miller
          </Typography>
          <Typography variant="subtitle1" component="div">
            Quantity: Mac Miller
          </Typography>
          <Typography variant="subtitle1" component="div">
            Price: Mac Miller
          </Typography>
          {/* <Typography variant="subtitle1" component="div">
          Total price: Mac Miller
        </Typography> */}
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
          10.000.000 đ
        </Typography>
        <Button color="secondary" variant="contained">
          Book now
        </Button>
      </CardActions>
    </Card>
  );
}

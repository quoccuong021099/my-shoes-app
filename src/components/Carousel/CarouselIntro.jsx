import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import images from '../../assets/images';

export default function CarouselIntro() {
  const items = [images.bg1, images.bg2, images.bg3];
  return (
    <Carousel
      autoPlay
      stopAutoPlayOnHover
      interval="3000"
      animation="slide"
      swipe
    >
      {items.map((item, i) => (
        <Paper
          key={i}
          sx={{
            backgroundImage: `url(${item})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            height: { xs: 300, md: 500, xl: 700 },
            width: '100%',
          }}
        />
      ))}
    </Carousel>
  );
}

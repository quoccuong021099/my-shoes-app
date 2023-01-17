import { Container } from '@mui/material';
import images from '../../assets/images';

export default function Order() {
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}
    >
      <img src={images.bookingSuccess} alt="booking success" />
    </Container>
  );
}

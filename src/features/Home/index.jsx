import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CarouselIntro from '../../components/Carousel/CarouselIntro';
import { getListProduct } from './homeSlice';

export default function Home() {
  const dispatch = useDispatch();
  // const listProducts = useSelector(listProduct);

  useEffect(() => {
    dispatch(getListProduct({ page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Container maxWidth="xl">
        <CarouselIntro />
      </Container>
    </Box>
  );
}

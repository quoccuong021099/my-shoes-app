import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import CarouselIntro from '../../components/Carousel/CarouselIntro';
import InfoStore from '../../components/InfoStore';
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
      <Helmet>
        <title>One Piece - Shoes Store</title>
        <meta name="description" content="One Piece" />
      </Helmet>
      <Container maxWidth="xl">
        <CarouselIntro />
        <InfoStore />
      </Container>
    </Box>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import CarouselIntro from '../../components/Carousel/CarouselIntro';
import ContactForm from '../../components/ContactForm';
import InfoStore from '../../components/InfoStore';
import ListProduct from '../../components/ListProduct';
import Loading from '../../components/Loading';
import { lishHash } from '../../routes';
import {
  getListProduct,
  selectListProduct,
  selectStatusListProduct,
} from './homeSlice';

export default function Home() {
  const dispatch = useDispatch();
  const listProducts = useSelector(selectListProduct);
  const { isLoading } = useSelector(selectStatusListProduct);
  const { hash } = useLocation();

  useEffect(() => {
    if (!isLoading) {
      dispatch(getListProduct());
    }
  }, []);

  const filterArr = (arr) =>
    arr.sort((a, b) => b.discount - a.discount).sort((a, b) => b.star - a.star);
  return (
    <Box>
      <Container maxWidth="xl">
        <CarouselIntro />
        <InfoStore />
        {isLoading ? (
          <Loading width={50} />
        ) : (
          <>
            {!lishHash.includes(hash) ? (
              <>
                <ListProduct
                  title="Hot product"
                  listProducts={filterArr(
                    listProducts.filter((item) => item.state === 'HOT'),
                  )}
                />
                <ListProduct
                  title="New product"
                  listProducts={filterArr(
                    listProducts.filter((item) => item.state === 'NEW'),
                  )}
                />
                <ListProduct
                  title="Hot Discount"
                  listProducts={filterArr(
                    listProducts.filter((item) => item.discount >= 15),
                  )}
                />
              </>
            ) : (
              <>
                <ListProduct
                  title={hash.slice(1)}
                  listProducts={filterArr(
                    listProducts.filter((item) =>
                      item?.trademark
                        .toLowerCase()
                        .includes(hash.slice(1).toLowerCase()),
                    ),
                  )}
                />
              </>
            )}
          </>
        )}
        <ContactForm />
      </Container>
    </Box>
  );
}

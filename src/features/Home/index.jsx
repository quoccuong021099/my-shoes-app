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
import { addCart } from '../Cart/cartSlice';
import {
  getListProduct,
  selectListProduct,
  selectStatusListProduct,
} from './homeSlice';

export default function Home({ isLogin }) {
  const dispatch = useDispatch();
  const listProducts = useSelector(selectListProduct);
  const { isLoading } = useSelector(selectStatusListProduct);
  const { hash } = useLocation();
  const triggerAddCart = (params) => dispatch(addCart(params));

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
                isLogin={isLogin}
                  title="Hot product"
                  triggerAddCart={triggerAddCart}
                  listProducts={filterArr(
                    listProducts.filter((item) => item.state === 'HOT'),
                  )}
                />
                <ListProduct
                isLogin={isLogin}
                  title="New product"
                  triggerAddCart={triggerAddCart}
                  listProducts={filterArr(
                    listProducts.filter((item) => item.state === 'NEW'),
                  )}
                />
                <ListProduct
                isLogin={isLogin}
                  title="Hot Discount"
                  triggerAddCart={triggerAddCart}
                  listProducts={filterArr(
                    listProducts.filter((item) => item.discount >= 15),
                  )}
                />
              </>
            ) : (
              <>
                <ListProduct
                isLogin={isLogin}
                  title={hash.slice(1)}
                  triggerAddCart={triggerAddCart}
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

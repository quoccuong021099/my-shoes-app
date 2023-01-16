/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import NoProduct from '../../components/NoProduct';
import DetailProductComp from '../../components/ProductDetailComp';
import HeaderProductDetail from '../../components/ProductDetailComp/HeaderProductDetail';
import AlertCommon from '../AlertCommon';
import { addCart, getCart } from '../Cart/cartSlice';
import {
  getProductDetail,
  selectProductDetail,
  selectStatusProductDetail,
} from './detailProductSlice';

export default function DetailProduct({ isLogin }) {
  const data = useSelector(selectProductDetail);
  const { id } = useParams();
  const { isLoading } = useSelector(selectStatusProductDetail);

  const dispatch = useDispatch();
  const triggerAddcCart = (param) => dispatch(addCart(param));

  useEffect(() => {
    if (id && !isLoading) {
      dispatch(getProductDetail(id));
    }
  }, [id]);

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <HeaderProductDetail />
      <Box display="flex" justifyContent="center" mt={8}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: '#000',
            my: 1,
            p: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '65%',
            minHeight: '300px',
          }}
        >
          {isLoading ? (
            <Loading width={50} />
          ) : (
            <>
              {data.length > 0 ? (
                <DetailProductComp
                  data={data}
                  isLogin={isLogin}
                  triggerAddcCart={triggerAddcCart}
                />
              ) : (
                <NoProduct />
              )}
            </>
          )}
        </Card>
      </Box>
      <AlertCommon />
    </Container>
  );
}

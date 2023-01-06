import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct, listProduct } from './homeSlice';

export default function Home() {
  const dispatch = useDispatch();
  const listProducts = useSelector(listProduct);

  useEffect(() => {
    dispatch(getListProduct({ page: 1 }));
  }, []);

  return <Box>Home</Box>;
}

/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images';

export default function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return (
    <Box>
      <img src={images.page404} alt="" width="100%" />
    </Box>
  );
}

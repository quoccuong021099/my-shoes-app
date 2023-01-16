import { Box, Typography } from '@mui/material';
import BackHomeButton from '../../components/BackHomeButton';
import { ShoesIcon } from '../../components/icons';

export default function HeaderProductDetail() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        fontSize={40}
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <ShoesIcon sx={{ fontSize: 40, mr: 1 }} />
        <span>Product detail</span>
      </Typography>
      <BackHomeButton />
    </Box>
  );
}

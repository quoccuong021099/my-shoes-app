import { Box, Typography } from '@mui/material';
import images from '../../assets/images';

export default function NoProduct({ width, height, title }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      alignItems="center"
      py={8}
    >
      <Box>
        <img
          src={images.noProduct}
          alt=""
          width={width}
          height={height || width}
        />
        {title && (
          <Typography sx={{ textAlign: 'center', fontSize: 30, color: '#fff' }}>
            {title}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

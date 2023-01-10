import { Box } from '@mui/system';

export default function Loading({ width }) {
  return (
    <Box
      sx={{ margin: '200px auto', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width,
          height: width,
          animation: '.5s ease-in infinite tim',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
}

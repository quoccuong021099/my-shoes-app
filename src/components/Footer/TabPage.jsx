import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import LogoShoes from '../Header/HeaderLeft/LogoShoes';

export default function TabPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 80,
        minWidth: 300,
        p: 1,
        flex: 1,
      }}
    >
      <LogoShoes
        color="#fff"
        sx={() => ({
          display: 'flex',
          py: 1,
          textDecoration: 'none',
          color: '#fff',
          maxWidth: 150,
        })}
      />
      <Typography sx={{ color: '#fff', mt: 2 }}>
        Shoes supermarket No. 1 Vietnam
      </Typography>
    </Box>
  );
}

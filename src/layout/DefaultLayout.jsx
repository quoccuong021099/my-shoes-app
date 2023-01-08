import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Box sx={{ backgroundColor: '#ee47074d' }}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}

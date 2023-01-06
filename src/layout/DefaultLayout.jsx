import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

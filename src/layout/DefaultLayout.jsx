import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DefaultLayout({ children, isLogin }) {
  return (
    <Box sx={{ backgroundColor: '#262a2b' }}>
      <Header isLogin={isLogin} />
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
      <Footer />
    </Box>
  );
}

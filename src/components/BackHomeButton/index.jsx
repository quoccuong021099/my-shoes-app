import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '../../components/icons';

export default function BackHomeButton() {
  return (
    <Link to="/">
      <IconButton sx={{ '&: hover': { backgroundColor: '#000' } }}>
        <ArrowBackIcon color="white" sx={{ fontSize: 40 }} />
      </IconButton>
    </Link>
  );
}

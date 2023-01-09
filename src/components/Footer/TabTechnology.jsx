import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MaterialIcon, ReduxToolkitIcon, ReactIcon } from '../icons';
import images from '../../assets/images';

const StyledTypo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.white.main,
  margin: '10px 0',
}));

const StyledA = styled('a')(({ theme }) => ({
  color: theme.palette.white.main,
  marginLeft: 12,
}));

export default function TabTechnology() {
  return (
    <Box sx={{ flex: 1, p: 1 }}>
      <Typography component="h6" variant="h6" sx={{ color: '#fff' }}>
        Technology used
      </Typography>
      <StyledTypo>
        <ReactIcon />
        <StyledA href="https://reactjs.org/" target="_blank">
          Reactjs
        </StyledA>
      </StyledTypo>
      <StyledTypo>
        <ReduxToolkitIcon />
        <StyledA href="https://redux-toolkit.js.org/" target="_blank">
          Redux-toolkit
        </StyledA>
      </StyledTypo>
      <StyledTypo>
        <img src={images.reduxSagaIcon} alt="Redux-saga" width={20} />{' '}
        <StyledA
          href="https://redux-saga.js.org/docs/introduction/GettingStarted"
          target="_blank"
        >
          Redux-saga
        </StyledA>
      </StyledTypo>
      <StyledTypo>
        <MaterialIcon />
        <StyledA href="https://mui.com/" target="_blank">
          {' '}
          Material-UI
        </StyledA>
      </StyledTypo>
    </Box>
  );
}

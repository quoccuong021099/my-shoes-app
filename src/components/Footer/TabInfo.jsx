import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocationIcon, PhoneIcon, MailIcon, GitHubIcon } from '../icons';

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

export default function TabInfo() {
  return (
    <Box sx={{ flex: 1, p: 1 }}>
      <Typography component="h6" variant="h6" sx={{ color: '#fff' }}>
        Contact me
      </Typography>
      <StyledTypo>
        <LocationIcon /> <StyledA>Hue, Hue City</StyledA>
      </StyledTypo>
      <StyledTypo>
        <PhoneIcon />
        <StyledA>0869504***</StyledA>
      </StyledTypo>
      <StyledTypo>
        <MailIcon />
        <StyledA>quoccuong021099@gmail.com</StyledA>
      </StyledTypo>
      <StyledTypo>
        <GitHubIcon />
        <StyledA href="https://github.com/quoccuong021099" target="_blank">
          quoccuong021099
        </StyledA>
      </StyledTypo>
    </Box>
  );
}

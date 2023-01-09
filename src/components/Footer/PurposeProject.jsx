import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FlowerIcon } from '../icons';

const StyledTypo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.white.main,
  margin: '10px 0',
}));

const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.white.main,
  marginLeft: 12,
}));

export default function PurposeProject() {
  return (
    <Box sx={{ flex: 1, p: 1 }}>
      <Typography component="h6" variant="h6" sx={{ color: '#fff' }}>
        Project purpose
      </Typography>
      <StyledTypo>
        <FlowerIcon />
        <StyledSpan>Practice learning knowledge</StyledSpan>
      </StyledTypo>
      <StyledTypo>
        <FlowerIcon />
        <StyledSpan>Skill practice</StyledSpan>
      </StyledTypo>
      <StyledTypo>
        <FlowerIcon />
        <StyledSpan>Learn new knowledge</StyledSpan>
      </StyledTypo>
      <StyledTypo>
        <FlowerIcon />
        <StyledSpan>Improve code</StyledSpan>
      </StyledTypo>
    </Box>
  );
}

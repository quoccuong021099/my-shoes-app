import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { useWidth } from '../../hooks/useWidth';
import PurposeProject from './PurposeProject';
import TabInfo from './TabInfo';
import TabPage from './TabPage';
import TabTechnology from './TabTechnology';

export default function Footer() {
  const WIDTH = useWidth();

  const NewDivider = () => <Divider flexItem color="white" />;

  return (
    <Box sx={(theme) => ({ backgroundColor: theme.palette.black.dark, p: 3 })}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: ['lg', 'xl'].includes(WIDTH) ? 'center' : 'flex-start',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <TabPage />
        <NewDivider />
        <PurposeProject />
        <NewDivider />
        <TabTechnology />
        <NewDivider />
        <TabInfo />
      </Container>
    </Box>
  );
}

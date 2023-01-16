import {
  Container,
  Divider,
  Link,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link as LinkTo } from 'react-router-dom';
import { useWidth } from '../../hooks/useWidth';
import { routes } from '../../routes';
import { listBrand } from '../Header/HeaderLeft';
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
      <SpeedDial
        ariaLabel="List brand"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          '& .MuiFab-primary': {
            backgroundColor: '#000',
            color: '#fff',
            width: 55,
            height: 55,
            border: '3px solid transparent',
            animation: '.5s ease-in infinite tim',
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {listBrand.map((action, index) => {
          const label = action.label.toLowerCase();
          const hashName = label.includes('other brands') ? 'other' : label;
          return (
            <SpeedDialAction
              key={index}
              tooltipTitle={action.name}
              sx={() => ({
                width: 55,
                height: 55,
                backgroundColor: '#fff',
                overflow: 'hidden',
                border: '3px solid transparent',
                '@keyframes tim': {
                  '0%': { borderRight: '3px solid #7c05a3' },
                  '25%': {
                    borderTop: '3px solid green',
                  },
                  '50%': {
                    borderLeft: '3px solid #2682ff',
                  },
                  '100%': {
                    borderBottom: '3px solid red',
                  },
                },
                '&:hover': {
                  backgroundColor: '#fff',
                  animation: '.5s ease-in infinite tim',
                },
              })}
              icon={
                <Link
                  to={`${routes.home}#${hashName}`}
                  component={LinkTo}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt={action.name}
                    src={action.icon}
                    style={{ width: 45 }}
                  />
                </Link>
              }
            />
          );
        })}
      </SpeedDial>
    </Box>
  );
}

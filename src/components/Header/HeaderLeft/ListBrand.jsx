import {
  Link,
  MenuItem,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import React from 'react';
import { Link as LinkTo } from 'react-router-dom';

function Demo({ style, item, isImg }) {
  return (
    <Link to="/" component={LinkTo} sx={(theme) => style(theme)}>
      {isImg && (
        <>
          <img src={item.icon} alt={item.label} style={{ width: 20 }} />
          &nbsp; &nbsp;
        </>
      )}
      <span>{item.label}</span>
    </Link>
  );
}

export default function ListBrand({ data, style, isImg }) {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {isImg ? (
            <MenuItem>
              <Demo style={style} isImg item={item} />
            </MenuItem>
          ) : (
            <Demo style={style} item={item} />
          )}
        </React.Fragment>
      ))}
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
        {data.map((action, index) => (
          <SpeedDialAction
            key={index}
            tooltipTitle={action.name}
            sx={() => ({
              width: 55,
              height: 55,
              backgroundColor: '#fff',
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
                to="/"
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
                  style={{ width: 20 }}
                />
              </Link>
            }
          />
        ))}
      </SpeedDial>
    </>
  );
}

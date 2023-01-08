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
      {item.label}
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
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        {data.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
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

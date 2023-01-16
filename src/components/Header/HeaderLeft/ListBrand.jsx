import {
  Link,
  MenuItem,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import React from 'react';
import { Link as LinkTo, useLocation } from 'react-router-dom';
import { routes } from '../../../routes';

function Demo({ style, item, isImg }) {
  const label = item.label.toLowerCase();
  const hashName = label.includes('other brands') ? 'other' : label;
  const { hash } = useLocation();
  return (
    <Link
      to={`${routes.home}#${hashName}`}
      component={LinkTo}
      sx={(theme) => ({
        ...style(theme),
        animation:
          hash.includes(hashName) && !isImg
            ? '.5s ease-in infinite example'
            : 'none',
      })}
    >
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

export default function ListBrand({ data, style, isImg, ...rest }) {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {isImg ? (
            <MenuItem {...rest}>
              <Demo style={style} isImg item={item} />
            </MenuItem>
          ) : (
            <Demo style={style} item={item} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorIcon,
  CheckCircleIcon,
  WarningIcon,
  CloseIcon,
} from '../../components/icons';
import { closeAlertCommon, selectorAlert } from './alertSlice';

export default function AlertCommon() {
  const dispatch = useDispatch();
  const onCloseAlert = (alertType) => dispatch(closeAlertCommon(alertType));

  const {
    alertType,
    msgText = 'success',
    isOpenProp,
  } = useSelector(selectorAlert);

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
    onCloseAlert(alertType);
  };

  useEffect(() => {
    if (isOpenProp) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    return () => {
      handleClose();
    };
  }, [isOpenProp]);

  if (!['error', 'success', 'warning'].includes(alertType)) {
    return null;
  }

  const IconsComponent = {
    error: <ErrorIcon color="error" />,
    success: <CheckCircleIcon color="third" />,
    warning: <WarningIcon color="warning" />,
  };

  const Icons = IconsComponent[alertType] || null;

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={2000}
      anchorOrigin={anchorOrigin}
      action={
        <IconButton color="inherit" size="small" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      }
      message={
        <>
          {msgText && (
            <Grid container spacing={1}>
              <Grid item>{Icons}</Grid>
              <Grid item>
                <Typography component="span">{msgText}</Typography>
              </Grid>
            </Grid>
          )}
        </>
      }
    />
  );
}

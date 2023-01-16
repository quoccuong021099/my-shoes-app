import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from '@mui/material';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginForm({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isLoading,
  handleClose,
  handleClickOpen,
  open,
  title,
  ...rest
}) {
  return (
    <Box sx={{ mx: 2 }} {...rest}>
      <Button variant="outlined" onClick={handleClickOpen} color="third">
        {title}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="Login"
      >
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            sx={{ my: 1 }}
            type="email"
            {...register('email', {
              required: 'Please, enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <TextField
            fullWidth
            size="small"
            sx={{ my: 1 }}
            type="password"
            {...register('password', {
              required: 'Please, enter your password',
            })}
            placeholder="Enter your password"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="third"
            disabled={isLoading}
            sx={{ color: '#fff' }}
          >
            Log In
            {isLoading && (
              <CircularProgress
                size={24}
                sx={{
                  color: 'blue',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

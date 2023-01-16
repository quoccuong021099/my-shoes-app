import LoginForm from '../../components/LoginForm';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectStatusLogin } from './loginSlice';
import { useEffect, useState } from 'react';

export default function Login({ title = 'Log In', ...rest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectStatusLogin);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    if (data) {
      dispatch(login(data));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);
  return (
    <LoginForm
      onSubmit={onSubmit}
      errors={errors}
      handleSubmit={handleSubmit}
      register={register}
      isLoading={isLoading}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      title={title}
      {...rest}
    />
  );
}

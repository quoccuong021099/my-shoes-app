import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/RegisterForm';
import AlertCommon from '../AlertCommon';
import {
  register as registerAction,
  selectStatusRegister,
} from './registerSlice';

export default function Register({ title = 'Register', ...rest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectStatusRegister);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    if (data) {
      dispatch(registerAction(data));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);
  return (
    <div>
      <RegisterForm
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
      <AlertCommon />
    </div>
  );
}

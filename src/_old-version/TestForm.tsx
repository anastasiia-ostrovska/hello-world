import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import {
  emailValidationRules,
  passwordValidationRules,
} from '@/modules/forms/validation/validation-rules';
import FillGuestDataButton from '@/modules/auth/ui/components/FillGuestDataButton';

type FormData = {
  testEmail: string;
  testPassword: string;
};

const SimpleForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      testEmail: '',
      testPassword: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleFillForm = () => {
    reset({
      testEmail: import.meta.env.VITE_GUEST_EMAIL,
      testPassword: import.meta.env.VITE_GUEST_PASSWORD,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="testEmail"
          control={control}
          rules={{ validate: emailValidationRules }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!error}
              helperText={error?.message}
              fullWidth
            />
          )}
        />
      </div>

      <div>
        <Controller
          name="testPassword"
          control={control}
          rules={{ validate: passwordValidationRules }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              error={!!error}
              helperText={error?.message}
              fullWidth
            />
          )}
        />
      </div>

      <div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <FillGuestDataButton onClick={handleFillForm} />
      </div>
    </form>
  );
};

export default SimpleForm;

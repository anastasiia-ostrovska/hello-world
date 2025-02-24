import { LogInInput } from '../model/types';
import {
  emailValidationRules,
  passwordValidationRules,
} from './validation-rules';

const input = {
  email: {
    name: LogInInput.Email,
    type: 'email',
    label: 'Email',
    autoComplete: 'email',
    helperText: 'in the format: example@domain.com',
    required: true,
    rules: {
      validate: emailValidationRules,
    },
  },
  password: {
    name: LogInInput.Password,
    type: 'password',
    label: 'Password',
    autoComplete: 'current-password',
    helperText: '16+ chars, uppercase, number and symbol',
    required: true,
    rules: {
      validate: passwordValidationRules,
    },
  },
  rememberMe: {
    name: LogInInput.RememberMe,
    label: 'Remember me',
    helperText: 'Stay logged in on this device',
  },
};

export default input;

import { UseControllerProps } from 'react-hook-form';

export interface ControlledInputProps {
  name: string;
  label: string;
  helperText?: string;
  showError?: boolean;
  rules?: UseControllerProps['rules'];
}

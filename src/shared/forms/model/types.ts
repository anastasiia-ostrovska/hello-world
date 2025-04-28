import { UseControllerProps } from 'react-hook-form';
import { ButtonProps, TextFieldProps } from '@mui/material';
import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { Styles } from '@shared/model';

export interface ControlledInputProps {
  name: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  showError?: boolean;
  rules?: UseControllerProps['rules'];
}

export interface ControlledTextFieldProps
  extends Omit<TextFieldProps, 'name' | 'helperText' | 'label'>,
    ControlledInputProps {}

export interface ControlledTextFieldWithTypeAttribute
  extends ControlledTextFieldProps {
  type: HTMLInputTypeAttribute;
}

export interface UploadFileButtonProps extends ControlledTextFieldProps {
  buttonSize?: ButtonProps['size'];
  buttonSX?: Styles;
  startIcon?: ReactNode;
  accept?: string;
}

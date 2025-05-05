import { Button, ButtonProps, IconButton } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

interface AppButtonProps extends ButtonProps {
  label: string;
  icon?: ReactNode;
  isIconButton?: boolean;
  children?: ReactNode;
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    { label, icon = null, children = null, isIconButton = false, ...props },
    ref
  ) => {
    if (isIconButton) {
      return (
        <IconButton ref={ref} aria-label={label} {...props}>
          {icon}
        </IconButton>
      );
    }

    return (
      <Button ref={ref} {...props} startIcon={icon}>
        {children || label}
      </Button>
    );
  }
);

AppButton.displayName = 'AppButton';
export default AppButton;

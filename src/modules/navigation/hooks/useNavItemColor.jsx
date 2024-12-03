import { useTheme } from '@mui/material/styles';
import { useCallback } from 'react';

const useNavItemColor = () => {
  const theme = useTheme();

  const getColor = useCallback(
    (isActive) => {
      return isActive
        ? theme.palette.primary.main
        : theme.palette.text.secondary;
    },
    [theme]
  );

  return getColor;
};

export default useNavItemColor;

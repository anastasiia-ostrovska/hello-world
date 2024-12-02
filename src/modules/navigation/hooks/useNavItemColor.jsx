import { useTheme } from '@mui/material/styles';
import { useCallback } from 'react';

const useNavItemColor = () => {
  const theme = useTheme();

  const getNavItemColor = useCallback(
    (activeId, currentId) => {
      const isActive = activeId === currentId;

      return isActive
        ? theme.palette.primary.main
        : theme.palette.text.secondary;
    },
    [theme]
  );

  return getNavItemColor;
};

export default useNavItemColor;

import { Path } from '@/modules/navigation/types';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';

type Color = string;
type GetNavItemColor = (path: Path) => Color;

const useNavItemColor = (): GetNavItemColor => {
  const { palette } = useTheme();
  const { pathname } = useLocation();

  return useCallback(
    (path: string): string => {
      const isActive = pathname.startsWith(path);
      return isActive ? palette.primary.main : palette.text.secondary;
    },
    [palette.primary.main, palette.text.secondary, pathname]
  );
};

export default useNavItemColor;

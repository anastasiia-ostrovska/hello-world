import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

type Color = string;
type GetNavItemColor = (path: string) => Color;

const useNavItemColor = (): GetNavItemColor => {
  const { palette } = useTheme();
  const { pathname } = useLocation();

  return (path: string): string => {
    const isActive = pathname.startsWith(path);
    return isActive ? palette.primary.main : palette.text.secondary;
  };
};

export default useNavItemColor;

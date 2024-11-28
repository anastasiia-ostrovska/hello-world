import { useTheme } from '@mui/material/styles';

const useNavItemColor = () => {
  const theme = useTheme();

  const getNavItemColor = (isActive) => {
    if (isActive) return theme.palette.primary.main;
    return theme.palette.text.secondary;
  };

  return getNavItemColor;
};

export default useNavItemColor;

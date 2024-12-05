import { useTheme } from '@mui/material/styles';

const useNavItemColor = (isActive) => {
  const theme = useTheme();

  return isActive ? theme.palette.primary.main : theme.palette.text.secondary;
};

export default useNavItemColor;

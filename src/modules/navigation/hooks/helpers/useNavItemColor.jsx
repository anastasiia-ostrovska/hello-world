import { useTheme } from '@mui/material/styles';

const useNavItemColor = (isActive) => {
  const { palette } = useTheme();

  return isActive ? palette.primary.main : palette.text.secondary;
};

export default useNavItemColor;

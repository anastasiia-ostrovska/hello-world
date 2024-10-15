import { useTheme } from '@mui/material/styles';
import getNameHash from '@/modules/users/utils/getNameHash';

const useAvatarColor = (name) => {
  const theme = useTheme();

  const colors = Object.values(theme.palette.background.avatar);
  const hash = getNameHash(name);
  const index = hash % colors.length;

  return colors[index];
};

export default useAvatarColor;

import { useTheme } from '@mui/material/styles';
import { User } from './types';
import getAvatarColor from './getAvatarColor';
import getInitials from './getInitials';

interface AvatarData {
  bgColor: string;
  initials: string;
}

const useAvatar = (name: User['name']): AvatarData => {
  const { palette } = useTheme();

  const colors = Object.values(palette.customBackground.avatar);
  const bgColor = getAvatarColor(name, colors);
  const initials = getInitials(name);

  return { bgColor, initials };
};

export default useAvatar;

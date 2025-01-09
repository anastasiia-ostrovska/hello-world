import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import getAvatarColor from '@/modules/users/helpers/getAvatarColor';

const useAvatarColor = (name) => {
  const { palette } = useTheme();

  const colors = useMemo(
    () => Object.values(palette.customBackground.avatar),
    [palette.customBackground.avatar]
  );

  const avatarColor = useMemo(
    () => getAvatarColor(name, colors),
    [name, colors]
  );

  return avatarColor;
};

export default useAvatarColor;

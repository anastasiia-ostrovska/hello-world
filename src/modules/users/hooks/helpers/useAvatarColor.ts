import { UserName } from '@/modules/users/types';
import { AvatarColor } from '@/shared/theme';
import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import getAvatarColor from '@/modules/users/helpers/getAvatarColor';

const useAvatarColor = (name: UserName): AvatarColor => {
  const { palette } = useTheme();

  const colors = useMemo(
    (): AvatarColor[] => Object.values(palette.customBackground.avatar),
    [palette.customBackground.avatar]
  );

  return useMemo(() => getAvatarColor(name, colors), [name, colors]);
};

export default useAvatarColor;

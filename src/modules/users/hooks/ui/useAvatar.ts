import { UserName } from '@/modules/users/types';
import { AvatarColor } from '@/modules/theme';
import { useMemo } from 'react';
import useAvatarColor from '@/modules/users/hooks/helpers/useAvatarColor';
import getInitials from '@/modules/users/helpers/getInitials';

interface AvatarData {
  bgColor: AvatarColor;
  initials: string;
}

const useAvatar = (name: UserName): AvatarData => {
  const bgColor = useAvatarColor(name);
  const initials = useMemo(() => getInitials(name), [name]);

  return { bgColor, initials };
};

export default useAvatar;

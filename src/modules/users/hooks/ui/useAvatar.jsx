import { useMemo } from 'react';
import useAvatarColor from '@/modules/users/hooks/helpers/useAvatarColor';
import getInitials from '@/modules/users/helpers/getInitials';

const useAvatar = (name) => {
  const bgColor = useAvatarColor(name);
  const initials = useMemo(() => getInitials(name), [name]);

  return { bgColor, initials };
};

export default useAvatar;

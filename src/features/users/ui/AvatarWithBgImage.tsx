import Box from '@mui/material/Box';
import { ReactElement } from 'react';
import { Styles } from '@shared/mui';
import { AvatarWithBgImageProps } from '../model/types';
import UserAvatar from './UserAvatar';

interface AvatarWithBgImageLayoutProps {
  bgImageBlock: ReactElement;
  avatar: ReactElement;
  sx?: Styles;
}

const AvatarWithBgImageLayout = ({
  bgImageBlock,
  avatar,
  sx = {},
}: AvatarWithBgImageLayoutProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'inherit',
        borderRadius: 'inherit',
        ...sx,
      }}
    >
      {bgImageBlock}
      {avatar}
    </Box>
  );
};

const UserBackgroundImage = ({
  bgImageHeight,
  bgImageSrc,
}: Pick<AvatarWithBgImageProps, 'bgImageHeight' | 'bgImageSrc'>) => {
  return (
    <Box
      bgcolor="grey.300"
      sx={{
        height: bgImageHeight,
        width: '100%',
        backgroundImage: `url(${bgImageSrc || ''})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      }}
    />
  );
};

const AvatarWithBgImage = ({
  userName,
  avatarSrc,
  bgImageSrc,
  avatarSize,
  bgImageHeight,
  avatarBorderColor = '',
  avatarBorderWidth = '5px',
  avatarPosition = 'center',
  sx = {},
}: AvatarWithBgImageProps) => {
  return (
    <AvatarWithBgImageLayout
      bgImageBlock={
        <UserBackgroundImage
          bgImageHeight={bgImageHeight}
          bgImageSrc={bgImageSrc}
        />
      }
      avatar={
        <UserAvatar
          userName={userName}
          src={avatarSrc}
          size={avatarSize}
          sx={{
            position: 'absolute',
            transform: 'translateY(-50%)',
            left:
              avatarPosition === 'center'
                ? `calc(50% - ${avatarSize / 2}px)`
                : '2rem',
            border: avatarBorderColor
              ? `${avatarBorderWidth} solid ${avatarBorderColor}`
              : 'none',
          }}
        />
      }
      sx={sx}
    />
  );
};

export default AvatarWithBgImage;

import { useTheme } from '@mui/material/styles';
import { AvatarPosition, AvatarWithBgImage } from '@entities/user';
import { usePhotosPreview } from '../model/usePhotosPrewiew';

interface PhotosEditorPreviewProps {
  userId: string;
  imagesSize: number;
}

const PhotosEditorPreview = ({
  userId,
  imagesSize,
}: PhotosEditorPreviewProps) => {
  const { palette } = useTheme();
  const { name, avatarSrc, backgroundSrc } = usePhotosPreview({ userId });

  return (
    <AvatarWithBgImage
      name={name}
      avatarSrc={avatarSrc}
      bgImageSrc={backgroundSrc}
      avatarSize={imagesSize}
      bgImageHeight={imagesSize}
      avatarPosition={AvatarPosition.Left}
      avatarBorderColor={palette.customBackground.sectionWrapper}
      avatarBorderWidth="4px"
      sx={{ mb: `${imagesSize / 2}px` }}
    />
  );
};

export default PhotosEditorPreview;

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { PhotoLabel, UploadedPhotos, UserPhotos } from '@entities/user';
import { updateImgSrc } from '../lib/updateImgSrc';

export const usePhotosPreview = ({
  photos,
}: {
  photos: UserPhotos;
}): UserPhotos => {
  const [avatarSrc, setAvatarSrc] = useState(photos.avatar);
  const [backgroundSrc, setBackgroundSrc] = useState(photos.background);

  const { watch } = useFormContext<UploadedPhotos>();

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      const updateProfileImgSrc = updateImgSrc(value);
      updateProfileImgSrc({
        photoLabel: PhotoLabel.Avatar,
        setSrc: setAvatarSrc,
      });
      updateProfileImgSrc({
        photoLabel: PhotoLabel.Background,
        setSrc: setBackgroundSrc,
      });
    });
    return () => unsubscribe();
  }, [watch]);

  return { avatar: avatarSrc, background: backgroundSrc };
};

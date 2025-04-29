import {
  generateFakeUsers,
  PhotoLabel,
  UploadedPhotos,
  useUserByIdQuery,
} from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { updateImgSrc } from '@features/user/photos-editor-preview/lib/updateImgSrc';

export const usePhotosPreview = ({ userId }: { userId: string }) => {
  const { data } = useUserByIdQuery(userId ?? skipToken);
  const fakeUser = generateFakeUsers(1)[0];
  const user = data?.data || fakeUser;

  const [avatarSrc, setAvatarSrc] = useState(user.photos.avatar);
  const [backgroundSrc, setBackgroundSrc] = useState(user.photos.background);

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

  return { name: user.name, avatarSrc, backgroundSrc };
};

import { PhotoLabel, UploadedPhotos } from '@entities/user';

interface UpdateImageSrcParams {
  photoLabel: PhotoLabel;
  setSrc: (value: string) => void;
}

export const updateImgSrc =
  (value: Partial<UploadedPhotos>) =>
  ({ photoLabel, setSrc }: UpdateImageSrcParams) => {
    const file = value?.[photoLabel]?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setSrc(url);
  };

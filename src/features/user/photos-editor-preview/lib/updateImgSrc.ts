import { PhotoLabel, PhotoSrc, UploadedPhotos } from '@entities/user';

interface UpdateImageSrcParams {
  photoLabel: PhotoLabel;
  initialValue: PhotoSrc;
  setSrc: (value: PhotoSrc) => void;
}

export const updateImgSrc =
  (value: Partial<UploadedPhotos>) =>
  ({ photoLabel, initialValue, setSrc }: UpdateImageSrcParams) => {
    const inputValue = value?.[photoLabel];
    const file = inputValue?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSrc(url);
    }
    if (inputValue === undefined) setSrc(initialValue);
    if (inputValue === null) setSrc(inputValue);
  };

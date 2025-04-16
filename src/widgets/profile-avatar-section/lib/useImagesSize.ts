import { useMediaQueryState } from '@shared/lib';

export const useImagesSize = (): { imageSize: number } => {
  const { isUpSM, isUpMD } = useMediaQueryState();

  if (isUpMD) return { imageSize: 150 };
  if (isUpSM) return { imageSize: 120 };

  return { imageSize: 100 };
};

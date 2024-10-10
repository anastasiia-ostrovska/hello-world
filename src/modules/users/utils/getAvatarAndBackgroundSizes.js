import SIZES from '../constants/avatarWithBackgroundSizes';

const getAvatarAndBackgroundSizes = (size) => SIZES[size] || SIZES.medium;

export default getAvatarAndBackgroundSizes;

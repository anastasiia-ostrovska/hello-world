import colors from './avatarBackgroundColors';
import getNameHash from './getNameHash';

/**
 * Function to get a color from an array of colors based on the user's name.
 * @param {string} name - The user's name.
 * @returns {string} - The selected color.
 */

const getColorFromName = (name) => {
  const hash = getNameHash(name);
  const index = hash % colors.length;
  return colors[index];
};

export default getColorFromName;

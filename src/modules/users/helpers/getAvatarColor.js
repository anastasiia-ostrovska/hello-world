import getNameHash from '@/modules/users/helpers/getNameHash';

/**
 * * Generates a color for an avatar based on the user's name.
 * The color is selected by hashing the name and using the result to pick from a list of colors.
 *
 * @param {string} name - The user's name.
 * @param {string[]} colors - An array of colors.
 * @returns {string} - The color assigned to the avatar.
 */

const getAvatarColor = (name, colors) => {
  const hash = getNameHash(name);
  const colorIndex = hash % colors.length;

  return colors[colorIndex];
};

export default getAvatarColor;

/**
 * Hash function to compute a hash value for a string.
 * @param {string} name - The user's name.
 * @returns {number} - The hash value.
 */

const getNameHash = (name) => {
  if (typeof name !== 'string' || name.length === 0) return 0;

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash * 31 + char) % 4294967296; // 2^32
  }

  return hash;
};

export default getNameHash;

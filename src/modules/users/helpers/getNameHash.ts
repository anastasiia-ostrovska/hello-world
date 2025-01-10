import { UserName } from '@/modules/users/types';

/**
 * Hash function to compute a hash value for a string.
 * @param {string} name - The user's name.
 * @returns {number} - The hash value.
 * Returns 0 if the input is invalid
 */

const getNameHash = (name: UserName): number => {
  if (name.length === 0) return 0;

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    hash = (hash * 31 + charCode) % 4294967296; // 2^32
  }

  return hash;
};

export default getNameHash;

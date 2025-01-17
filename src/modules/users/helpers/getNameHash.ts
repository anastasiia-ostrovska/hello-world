import { UserName } from '@/modules/users/types';

/**
 * Hash function to compute a hash value for a string.
 * @param {string} name - The user's name.
 * @returns {number} - The hash value.
 * Returns 0 if the input is invalid
 */

export type Hash = number;

const getNameHash = (name: UserName): Hash => {
  if (!name) return 0;

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    hash = (hash * 31 + charCode) % 4294967296; // 2^32
  }

  return hash;
};

export default getNameHash;

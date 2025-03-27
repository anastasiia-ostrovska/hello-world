import { FakeUser } from './types';

/**
 * Generates an array of fake users.
 *
 * @param {number} count - The number of users to create.
 * @returns {Array} - An array of user objects.
 *
 * Each user has the following fields:
 *   - id: unique user identifier (uuid)
 *   - name: empty string for the name
 *   - status: empty string for the status
 *   - photos: an object with small and large photo properties set to null
 *   - followed: default value is false
 */

const generateFakeUsers = (count: number): FakeUser[] =>
  Array.from({ length: count }, () => ({
    id: crypto.randomUUID(),
    name: '',
    job: '',
    country: '',
    photos: { avatar: null, background: null },
    followed: false,
  }));

export default generateFakeUsers;

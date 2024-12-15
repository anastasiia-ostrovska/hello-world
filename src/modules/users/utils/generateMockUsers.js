import { v4 as uuidv4 } from 'uuid';

const generateMockUsers = (count) =>
  Array.from({ length: count }, () => ({
    id: uuidv4(),
    name: '',
    status: '',
    photos: { small: null, large: null },
    followed: false,
  }));

export default generateMockUsers;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [
    {
      userId: 1,
      name: 'Jane Doe',
      city: 'Landudno',
      position: 'Designer',
      imageSrc:
        'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
      isFollowed: true,
    },
    {
      userId: 2,
      name: 'Lui Kells',
      city: 'Nevada',
      position: 'Teacher',
      imageSrc:
        'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
      isFollowed: false,
    },
    {
      userId: 3,
      name: 'Robert Zano',
      city: 'Weles',
      position: 'Musician',
      imageSrc:
        'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
      isFollowed: true,
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        users: state.users.map((user) => {
          return user.userId === action.userId
            ? { ...user, isFollowed: true }
            : user;
        }),
      };
    case UNFOLLOW:
      return {
        users: state.users.map((user) => {
          return user.userId === action.userId
            ? { ...user, isFollowed: false }
            : user;
        }),
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;

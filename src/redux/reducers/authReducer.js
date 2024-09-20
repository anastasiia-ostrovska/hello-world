const SET_AUTH_DATA = 'SET_AUTH_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isLoading: false,
  isAuthorized: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuthorized: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (data) => ({ type: SET_AUTH_DATA, data });

export default authReducer;

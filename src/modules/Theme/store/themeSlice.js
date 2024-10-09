import { createSlice } from '@reduxjs/toolkit';

const modeKey = 'lightMode';

export const modeType = {
  dark: 'dark',
  light: 'light',
};

const initialState = {
  isLightMode: !!JSON.parse(localStorage.getItem(modeKey)),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectIsLightMode: (state) => state.isLightMode,
    selectMode: (state) => (state.isLightMode ? modeType.light : modeType.dark),
    selectModeToSwitch: (state) => {
      return state.isLightMode ? modeType.dark : modeType.light;
    },
  },
  reducers: {
    toggleIsLightMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

const { toggleIsLightMode } = themeSlice.actions;

export const toggleMode = () => (dispatch) => {
  const isLightMode = !!JSON.parse(localStorage.getItem(modeKey));
  localStorage.setItem(modeKey, JSON.stringify(!isLightMode));
  dispatch(toggleIsLightMode());
};

export const { selectMode } = themeSlice.selectors;
export default themeSlice.reducer;

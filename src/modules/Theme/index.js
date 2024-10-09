import { themeSlice } from './store/themeSlice';

export const { selectIsLightMode, selectModeToSwitch } = themeSlice.selectors;

export { toggleMode } from './store/themeSlice';

export { default as ThemeWrapper } from './ui/containers/ThemeWrapper';

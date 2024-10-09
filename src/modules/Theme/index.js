import { themeSlice } from './store/themeSlice';

export { default as ThemeWrapper } from './ui/containers/ThemeWrapper';

export { toggleMode } from './store/themeSlice';

export const { selectIsLightMode, selectModeToSwitch } = themeSlice.selectors;

import { themeSlice } from './store/themeSlice';

export { default as ThemeWrapper } from './ui/containers/ThemeWrapper';

export { modeType } from './store/themeSlice';

export const { selectMode, selectModeToSwitch } = themeSlice.selectors;
export const { switchMode } = themeSlice.actions;

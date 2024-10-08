import { themeSlice } from './store/themeSlice';

export { default as ThemeWrapper } from './ui/containers/ThemeWrapper';

export const { selectMode } = themeSlice.selectors;
export const { toggleMode } = themeSlice.actions;

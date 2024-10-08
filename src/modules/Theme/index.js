import { themeSlice } from '@/modules/Theme/store/themeSlice';

export const { selectMode } = themeSlice.selectors;
export const { toggleMode } = themeSlice.actions;

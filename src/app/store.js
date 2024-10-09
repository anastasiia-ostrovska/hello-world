import { configureStore } from '@reduxjs/toolkit';
import baseApi from '@/services/baseApi';
import rootReducer from '@/shared/store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

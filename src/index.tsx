import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/redux';
import { ThemeWrapper } from '@/modules/theme';
import AppInitializer from './app/AppInitializer';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeWrapper>
          <AppInitializer />
        </ThemeWrapper>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

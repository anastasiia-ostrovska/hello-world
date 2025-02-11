import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeWrapper } from '@/modules/theme';
import { store } from '@/redux';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

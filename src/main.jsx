import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeWrapper } from '@/modules/Theme';
import App from './App';
import './index.css';

import store from './store/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeWrapper>
    </Provider>
  </StrictMode>
);

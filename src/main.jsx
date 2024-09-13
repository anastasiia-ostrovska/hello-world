import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import store from './redux/store';

const dialogs = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Vlad' },
  { id: 3, name: 'Eugenia' },
  { id: 4, name: 'Oleksandr' },
  { id: 5, name: 'Valeria' },
  { id: 6, name: 'Oleksiy' },
  { id: 7, name: 'Denys' },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App dialogs={dialogs} />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const posts = [
  { id: 1, text: 'Here my first post', likes: 5 },
  { id: 2, text: 'Glad to see you here!', likes: 3 },
  { id: 3, text: 'Whasup guys and gals', likes: 8 },
];

const dialogs = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Vlad' },
  { id: 3, name: 'Eugenia' },
  { id: 4, name: 'Oleksandr' },
  { id: 5, name: 'Valeria' },
  { id: 6, name: 'Oleksiy' },
  { id: 7, name: 'Denys' },
];

const messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How ere you?' },
  { id: 3, message: 'Hi! I`m fine!' },
  { id: 4, message: 'What an interesting dialog!' },
  { id: 5, message: 'That`s what she said)' },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </StrictMode>
);

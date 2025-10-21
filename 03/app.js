import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './MenuItem';
const root = createRoot(document.querySelector('#root'));

const item = { text: 'Kontakt', url: '/contact' };

const App = () => (
  <ul>
    <MenuItem {...item} />
  </ul>
);

root.render(<App />);

export default App;

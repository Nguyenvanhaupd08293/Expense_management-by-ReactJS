import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/routes';
const App = () => {
  return (
    <BrowserRouter>
    <AppRouter>
    </AppRouter>
    </BrowserRouter>
  );
};

export default App;

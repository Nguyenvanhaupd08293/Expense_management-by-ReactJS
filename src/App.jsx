import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/routes';
import { Provider } from 'react-redux';
import Store from './redux/store';
const App = () => {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <AppRouter>
    </AppRouter>
    </BrowserRouter>
    </Provider>
  );
};

export default App;

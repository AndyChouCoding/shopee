import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Router from './pages/router';
import { AuthProvider } from './contexts/authcContext';
import { Provider } from 'react-redux';
import store from './store';
import './firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

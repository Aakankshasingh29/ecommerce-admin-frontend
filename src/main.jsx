import React from 'react'
import App from './App.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useStore } from 'zustand';

const root = ReactDOM.createRoot(document.getElementById('__admin_panel'));
// const rootElement = document.getElementById('__admin_panel'); // Make sure this is not null
// if (rootElement) {
//     const root = ReactDOM.createRoot(__admin_panel);
//     root.render(<App />);
// } else {
//     console.error('__admin_panel not founnd' );
// }
  root.render(
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  );

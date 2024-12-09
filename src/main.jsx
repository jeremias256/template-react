import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './output.css';
/* ----------------------------------------- react redux ---------------------------------------- */
import { store } from "store";
import { Provider } from "react-redux";
/* ---------------------------------------- react router ---------------------------------------- */
import ReactDOM from "react-dom/client";
/* ----------------------------------------- components ----------------------------------------- */
import { AppRouter } from "router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)

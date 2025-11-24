import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the DB test function
import { testDB } from "./services/dbTest";

// Run the database test BEFORE rendering the app
testDB().then((res) => {
  console.log("DB TEST RESULT:", res);
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

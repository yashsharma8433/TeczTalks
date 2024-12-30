import { StrictMode } from 'react'; // Import StrictMode for highlighting potential problems in the app
import { createRoot } from 'react-dom/client'; // Import createRoot for rendering
import App from './App.jsx'; // Import the main App component

// Use createRoot to bind the React app to the DOM element with id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App /> 
  </StrictMode> 
);

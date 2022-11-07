import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import FilmdleTheme from '../src/styles/FilmdleTheme';

ReactDOM.render(
  <React.StrictMode>
    <FilmdleTheme>
      <App />
    </FilmdleTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
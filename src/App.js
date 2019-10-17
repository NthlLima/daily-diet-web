import React from 'react';
import { Header } from './components'
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const App = () => {
  return (
      <div className="App main-container">
        <Header/>
        <Routes/>
      </div>
  );
}

export default App;
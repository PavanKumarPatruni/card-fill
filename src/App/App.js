import React from 'react';

import Header from '../components/Header';

import './App.scss';

import Icon from '../assets/images/bg.png';

const App = () => {
  return (
    <div>
      <Header />
      <img src={Icon} alt="ICON" />
    </div>
  );
};

export default App;

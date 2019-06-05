import React from 'react';
import './ui.css';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Header from './components/Header.jsx';

const App = () => (
  <div>
    <Header />
    <Hello />
    <Info />
  </div>
);

export default App;

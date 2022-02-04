import './App.css';
import React from 'react';
import Header from './components/Header';
import Wallet from './components/Wallet';
import Products from './components/Products';



function App() {
  return (
    <div className="App">
     <Header />
      <Wallet />
      <Products />
    </div>
  );
}

export default App;

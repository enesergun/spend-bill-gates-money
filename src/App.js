import './App.css';
import React from 'react';
import bill_gates from './assets/images/bill_gates.png';
;


function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={bill_gates} alt="Bill Gates"/>
        <h1>Spend Bill Gates's Money</h1>
      </div>
      <div className="wallet"></div>
      <div className="products"></div>
    </div>
  );
}

export default App;

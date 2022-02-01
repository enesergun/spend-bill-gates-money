import './App.css';
import React from 'react';
import bill_gates from './assets/images/bill_gates.png';
import items from './assets/data.js';


function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={bill_gates} alt="Bill Gates"/>
        <h1>Spend Bill Gates' Money</h1>
      </div>
      <div className="wallet">
        $100,000,000,000
      </div>
      <div className="products">
        {
          items.map(item => (
            <div className="product" key={item.id}>
              <img src={item.picture} alt={item.title}/>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <form action="">
                <button>Sell</button>
                <input type="number" name="" id="" />
                <button>Buy</button>
              </form>
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import bill_gates from '../assets/images/bill_gates.png';

function Header() {
  return (
  <div>
     <div className="header">
        <img src={bill_gates} alt="Bill Gates"/>
        <h1>Spend Bill Gates' Money</h1>
    </div>
  </div>);
}

export default Header;

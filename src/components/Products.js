import React from 'react';
import items from '../assets/data.js';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        return images[item.replace('./', '')] = r(item); 
    });
    return images;
}
  
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


function Products() {
  return (
  <div>
      <div className="products">
        {
          items.map(item => (
            <div className="product" key={item.id}>
              <img src={images[`${item.picture}`]} alt={item.title}/>
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

export default Products;

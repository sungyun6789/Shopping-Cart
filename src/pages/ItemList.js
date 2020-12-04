import React from 'react';
import '../styles/Item.scss';
// import productItems from '../services/productItems';

const ItemList = () => {
  return (
    <div className="item">
      <div className="item-container">
        <p className="title" />
        <div className="body">
          {/* <img /> */}
          <p className="price" />
          <button>dd</button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

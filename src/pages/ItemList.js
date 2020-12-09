import React from 'react';
import Item from '../components/Item';
import productItems from '../data/productItems';

const ItemList = () => {
  const sortList = productItems.sort((a, b) => {
    return a.score < b.score ? -1 : a.score > b.score ? 1 : 0;
  });

  return (
    <div className="item-list-container">
      {sortList.map((item) => (
        <Item key={item.id} {...item}></Item>
      ))}
    </div>
  );
};

export default ItemList;

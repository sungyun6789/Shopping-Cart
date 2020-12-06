// Item.js 에서 값을 가져와 보여주는 페이지

import React from 'react';
import Item from '../components/Item';
import productItems from '../data/productItems';

const ItemList = () => {
  const list = productItems;

  return (
    <div className="item-list-container">
      {list.map((item) => (
        <Item key={item.id} {...item}></Item>
      ))}
    </div>
  );
};

export default ItemList;

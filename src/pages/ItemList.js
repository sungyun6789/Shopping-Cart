import React from "react";
import productItems from "../Data/productItems";

const ItemList = () => {
  return (
    <>
      <div>여기는 아이템 리스트입니다.</div>
      {productItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default ItemList;

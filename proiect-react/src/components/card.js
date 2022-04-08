import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, price, } = item;
  return (
    <div className="cards">
      <div className="details">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;


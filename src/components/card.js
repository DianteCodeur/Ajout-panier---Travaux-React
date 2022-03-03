import React from "react";
// creation d'un composant Card qui va contenir les produits
const Card = ({ item, handleClick }) => {
  // creation des constantes pour les propriétés du produit
  const { id, title, author, price, img } = item;
  return (
    // on affiche les details du produit dans la carte
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>{" "}
      <div className="details">
        <p> {title} </p> <p> {author} </p> <p> {price} </p>{" "}
        <button onClick={() => handleClick(item)}> add to cart </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Card;

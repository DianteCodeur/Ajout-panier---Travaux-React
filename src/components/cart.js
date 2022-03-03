import React, { useState, useEffect } from "react";
import "../styles/cart.css";

// creation du composant Cart qui va contenir les produits puis on récupére la liste des produits achetés
const Cart = ({ cart, setCart, handleChange }) => {
  // creation d'un state pour le prix qui est initialisé à 0
  const [price, setPrice] = useState(0);

  // handle remove  permet de supprimer un produit du cart
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  // handle price gére les prix des produits
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  //useEffect permet de gérer le prix des produits à chaque changement de state
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {" "}
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p> {item.title} </p>{" "}
          </div>{" "}
          <div>
            <button onClick={() => handleChange(item, 1)}> + </button>{" "}
            <button> {item.amount} </button>{" "}
            <button onClick={() => handleChange(item, -1)}> - </button>{" "}
          </div>{" "}
          <div>
            <span> {item.price} </span>{" "}
            <button onClick={() => handleRemove(item.id)}> Remove </button>{" "}
          </div>{" "}
        </div>
      ))}{" "}
      <div className="total">
        <span> Total Price of your Cart </span> <span> Euros - {price} </span>{" "}
      </div>{" "}
    </article>
  );
};

export default Cart;

import React, { useState } from "react";
//importation des composants qui seront rendus sur le App.js
import Navbar from "./components/navbar";
import Shop from "./components/shop";
import Cart from "./components/cart";
const App = () => {
  //creation d'un state qui est initialisé à true pour alterner la vue panier ou shop
  const [show, setShow] = useState(true);
  //creation d'un state pour le panier qui est un tableau vide
  const [cart, setCart] = useState([]);
  //creation d'un state pour les produits qui est un tableau vide
  //handleClick est une fonction qui permet de récupérer les produits et les mettre dans le cart
  const handleClick = (item) => {
    setCart([...cart, item]);
  };
  //handleRemove est une fonction qui permet de supprimer un produit du cart ou de changer sa quantité
  const handleChange = (item, d) => {
    // recuperation de l'index du produit dans le cart
    const ind = cart.indexOf(item);
    const arr = cart;
    //count est la quantité du produit dans le cart
    arr[ind].amount += d;
    //si la quantité est inférieur à 1, on supprime le produit du cart
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    // creation d'un fragment pour ne pas avoir de balise <div>
    // affichage du navbar si show est true ou du cart si Show est False
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;

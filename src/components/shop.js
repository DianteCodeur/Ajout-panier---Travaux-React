import { React, useState } from "react";
// importation des données
import list from "../data";
// importation les composants
import Card from "./card";
// importationdu styles
import "../styles/shop.css";

//creation du composant shop et affichage des produits dans la carte
const Shop = ({ handleClick }) => {
  return (
    <section>
      {" "}
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}{" "}
    </section>
  );
};

export default Shop;

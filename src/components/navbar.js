import React from "react";
import "../styles/navbar.css";
// composant pouur la barre de navigation
const Navbar = ({ setShow, size }) => {
  return (
    //ici on se  gére quelle page afficher soit le shop ou le cart
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My shopping{" "}
        </span>{" "}
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"> </i>{" "}
          </span>{" "}
          <span> {size} </span>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;

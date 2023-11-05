import React from "react";
import img from "../assets/logo-img.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="Navbar">
      <img src={img} alt="Logo" />
      <Link to="/CreateUser">
        <button>Criar Empresa</button>
      </Link>
    </div>
  );
};

export default NavBar;



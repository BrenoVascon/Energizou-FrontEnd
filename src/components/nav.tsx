import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo-img.png";
import "../css/Navbar.css";

interface NavBarProps {
  onSearch: (text: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <div className="Navbar">
      <img className="logoImg" src={img} alt="Logo" />
      <input
        className="SearchUsers"
        type="text"
        placeholder="Pesquisar por CNPJ"
        onChange={handleSearch}
      />

      <Link to="/CreateUser">
        <button className="ButtonCreateCompany">Criar Empresa</button>
      </Link>
    </div>
  );
};

export default NavBar;

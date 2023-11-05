import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe BrowserRouter aqui
import CreateUser from "../src//components/CompanyRegister";
import EditUser from "../src/components/EditCompanyForm";
import Home from "./pages/Homepage";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/EditUser/:cnpj" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;

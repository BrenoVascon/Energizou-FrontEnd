import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Homepage.css";
import "../css/reset.css";
import DeleteButton from "../components/DeleteCompany";
import NavBar from "../components/nav";
import { Link } from "react-router-dom";

interface UserData {
  id: number;
  name: string;
  password: string;
  company: string;
  cnpj: string;
  cep: string;
  address: string;
  number: string;
  phone: string;
  email: string;
}

function Home() {
  const [data, setData] = useState<UserData[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<UserData[]>([]);

  useEffect(() => {
    axios
      .get<UserData[]>("http://localhost:3333/users")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  useEffect(() => {
    const filtered = data.filter((d) => d.cnpj && d.cnpj.includes(searchText));

    setFilteredData(filtered);
  }, [searchText, data]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <section className="section-grid">
        <h1>Usuários Cadastrados</h1>
        <div className="DataUsers"></div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Senha</th>
              <th>Empresa</th>
              <th>CNPJ</th>
              <th>CEP</th>
              <th>Endereço</th>
              <th>Numero</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Editar / Excluir</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((d, i) => (
  <tr key={i}>
    <td>{d.name}</td>
    <td>{d.password}</td>
    <td>{d.company}</td>
    <td>{d.cnpj ? d.cnpj : ""}</td>
    <td>{d.cep}</td>
    <td>{d.address}</td>
    <td>{d.number}</td>
    <td>{d.phone}</td>
    <td>{d.email}</td>
    <td>
      <Link to={`/editarUsuario/${d.cnpj ? d.cnpj : ""}`}>
        <button className="buttonEditUser" id="btEditar">
          Editar
        </button>
      </Link>

      {d.cnpj ? (
        <DeleteButton cnpj={d.cnpj.replace(/\//g, "")} />
      ) : null}
    </td>
  </tr>
))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Home;

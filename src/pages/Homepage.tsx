import { useEffect, useState } from "react";
import axios from "axios";
import '../css/Homepage.css'
import '../css/reset.css';
import DeleteButton from "../components/DeleteCompany";
import NavBar from "../components/nav";

interface UserData {
  id: number;
  name: string;
  password: string;
  company: string;
  CNPJ: string;
  cep: string;
  address: string;
  number: string;
  phone: string;
  email: string;
}

function Home() {
  const [data, setData] = useState<UserData[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<UserData[]>([]);

  useEffect(() => {
    axios
      .get<UserData[]>("http://localhost:3333/users")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filtered = data.filter((d) => d.CNPJ.includes(searchText));
    setFilteredData(filtered);
  }, [searchText, data]);

  return (
    <>
    <NavBar />
      <section className="section-grid">
        <h1>Usuários Cadastrados</h1>
        <div className="DataUsers">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquisar por CNPJ"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
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
                  <td>{d.CNPJ}</td>
                  <td>{d.cep}</td>
                  <td>{d.address}</td>
                  <td>{d.number}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>
                    <button className="buttonEditUser">Editar</button>
                    <DeleteButton
                      CNPJ={d.CNPJ}
                      name={d.name}
                      password={d.password}
                      company={d.company}
                      cep={d.cep}
                      address={d.address}
                      number={d.number}
                      phone={d.phone}
                      email={d.email}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Home;

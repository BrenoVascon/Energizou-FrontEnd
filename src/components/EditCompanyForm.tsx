import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../css/UserEdit.css"
import  img  from "../assets/logo-img.png"


interface UserData {
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

function EditUser() {
  


  const checkCEP = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, ''); 
  
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
  
        if (!data.erro) {
        
          setUserData((prevUserData) => ({
            ...prevUserData,
            cep: data.cep,
            address: data.logradouro,
            
          }));
        } else {
          console.error("CEP não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const { cnpj } = useParams<{ cnpj: string }>();

const [userData, setUserData] = useState<UserData>({
  name: "",
  password: "",
  company: "",
  cnpj: cnpj || "", 
  cep: "",
  address: "",
  number: "",
  phone: "",
  email: "",
});

  useEffect(() => {
    axios
      .get<UserData>(`http://localhost:3333/users/${cnpj}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [cnpj]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3333/users/${cnpj}`, userData)
      .then((res) => {
        console.log("Dados atualizados:", res.data);
      })
      .catch((err) => {
        console.error("Erro ao atualizar dados do usuário:", err);
      });
  };

  return (
    <>
     <div className="Navbar">
      <img src={ img } alt="Logo" />
      <Link to="/">
        <button>Voltar</button>
      </Link>
      </div>
    <div className="Container" >
      <form className="form-container"> 
         <div className=".edit-user">
        <h1 className="letterH">Editar Usuário</h1>
       
          <div>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite Seu nome"
            value={userData.name}
            onChange={handleInputChange}
          />
        
        </div>
        <div className="input-container2">
          <label>Senha</label>
          <input 
            type="password"
            name="password"
            placeholder="Digite Sua Senha"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>Empresa</label>
          <input 
            type="text"
            name="company"
            placeholder="Digite o Nome da Empresa"
            value={userData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>CNPJ</label>
          <input 
            type="text"
            name="cnpj" 
            placeholder="Digite o CNPJ sem / apenas ."
            value={userData.cnpj}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>CEP</label>
          <input 
            type="text"
            name="cep"
            placeholder="digite seu CEP"
            value={userData.cep}
            onBlur={checkCEP}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>Endereço</label>
          <input 
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>Número</label>
          <input 
            type="text"
            name="number"
            placeholder="Digite Seu Número"
            value={userData.number}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>Telefone</label>
          <input 
            type="text"
            name="phone"
            placeholder="Digite Seu Telefone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container2">
          <label>Email</label>
          <input 
            type="text"
            name="email"
            placeholder="Digite Seu Email"
            value={userData.email}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <button className="AttUser" type="button" onClick={handleSubmit}>
          Atualizar Usuário
        </button>
      </form>
    </div>
    </>
  );
}

export default EditUser;

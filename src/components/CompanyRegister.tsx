import React, { } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../css/NewUser.css";
import "../css/reset.css";
import img from "../assets/logo-img.png";
import { Link } from "react-router-dom";


interface FormData {
  id?: number;
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

const CreateUser: React.FC = () => {
  const control = useForm<FormData>();

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:3333/users/", data);
      console.log(response.data);
    
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
    }
  };
  

  const checkCEP = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (data) {
          control.setValue('address', data.logradouro);
          control.setValue('number', '');
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  return (
    <>
   <div className="Navbar">
      <img className="homeImg" src={img} alt="Logo" />
      <Link to="/">
        <button>Voltar</button>
      </Link>
      </div>
    <div className="form-container">
      <div className="input-control">
        <form onSubmit={control.handleSubmit(onSubmit)}>
          <h1>Cadastre uma Empresa</h1>
          <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite Seu Nome"
              {...control.register("name")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite Sua senha"
              {...control.register("password")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="company">Nome da Empresa</label>
            <input
              type="text"
              placeholder="Digite o Nome da Empresa"
              {...control.register("company")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="CNPJ">CNPJ</label>
            <input
              type="text"
              placeholder="Digite o CNPJ da Empresa Sem / apenas ."
              {...control.register("cnpj")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              placeholder="CEP"
              {...control.register("cep")}
              onBlur={checkCEP}
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              placeholder="Digite Seu CEP"
              {...control.register("address")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="number">Número</label>
            <input
              type="number"
              placeholder="Número"
              {...control.register("number")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Telefone</label>
            <input
              type="number"
              placeholder="Digite Seu Telefone"
              {...control.register("phone")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Digite Seu Email"
              {...control.register("email")}
            />
          </div>

          <button type="submit">Cadastrar Empresa</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateUser;

import React, { ChangeEvent, useState } from "react";
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
  const [formattedCep, setFormattedCep] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = async (data: FormData): Promise<void> => {
    if (!emailRegex.test(data.email)) {
      window.alert("Email inválido");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3333/users/", data);
      console.log(response.data);
      window.alert("Usuário foi criado!!");
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
    }
  };

  const checkCEP = async (e: ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (data) {
          control.setValue('address', data.logradouro);
          control.setValue('number', '');
          setFormattedCep(data.cep);
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    } else {
      setFormattedCep("");
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
                maxLength={50}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite Sua senha"
                {...control.register("password")}
                maxLength={20}
              />
            </div>
            <div className="input-container">
              <label htmlFor="company">Nome da Empresa</label>
              <input
                type="text"
                placeholder="Digite o Nome da Empresa"
                {...control.register("company")}
                maxLength={100}
              />
            </div>
            <div className="input-container">
              <label htmlFor="cnpj">CNPJ</label>
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
                maxLength={9}
                onBlur={checkCEP}
                pattern="\d{5}-\d{3}"
              />
              {formattedCep && <p>CEP Formatado: {formattedCep}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                placeholder="Digite Seu Endereço"
                {...control.register("address")}
                maxLength={100}
              />
            </div>
            <div className="input-container">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                placeholder="Número"
                {...control.register("number")}
                maxLength={11}
              />
            </div>
            <div className="input-container">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                placeholder="Digite Seu Telefone (ex: +55 (11) 9748115802)"
                {...control.register("phone")}
                pattern="\+55 \(\d{2}\) \d{9}"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Digite Seu Email"
                {...control.register("email")}
                maxLength={100}
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

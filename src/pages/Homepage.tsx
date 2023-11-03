import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  id?: number;
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

const Contact: React.FC = () => {
  const control = useForm<FormData>();

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      axios
        .post("http://localhost:3333/users/", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Entre em Contato</h1>
        <form onSubmit={control.handleSubmit(onSubmit)}>
          <input type="text" placeholder="name" {...control.register("name")} />
          <input
            type="password"
            placeholder="Password"
            {...control.register("password")}
          />
          <input
            type="text"
            placeholder="Company"
            {...control.register("company")}
          />

          <input
            type="number"
            placeholder="CNPJ"
            {...control.register("CNPJ")}
          />
          <input type="number" placeholder="CEP" {...control.register("cep")} />
          <input
            type="text"
            placeholder="address"
            {...control.register("address")}
          />
          <input
            type="number"
            placeholder="number"
            {...control.register("number")}
          />
          <input
            type="number"
            placeholder="phone number"
            {...control.register("phone")}
          />
          <input
            type="text"
            placeholder="email"
            {...control.register("email")}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

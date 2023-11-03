import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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

const Contact: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    password: '',
    company: '',
    cnpj: '',
    cep: '',
    address: '',
    number: '',
    phone: '',
    email: ''
  };

  const { handleSubmit } = useForm<FormData>();

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      axios.post('http://localhost:3333/users', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

      // Adicione lógica adicional, como mostrar uma mensagem de sucesso ao usuário
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      // Adicione lógica para lidar com o erro, como mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <div>
      <div>
        <h1>Entre em Contato</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='name' name='name' value={formData.name}
         onChange={handleChange}/>
         <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text" 
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
         
                <input
            type="number" 
            placeholder="CNPJ"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
          />
                 <input
            type="number" 
            placeholder="CEP"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
                 <input
            type="text" 
            placeholder="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
                 <input
            type="number" 
            placeholder="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
                  <input
            type="number" 
            placeholder="phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
                  <input
            type="text" 
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

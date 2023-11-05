import axios from "axios";

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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
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

interface SearchUsersProps {
  onDataFiltered: (filteredData: User[]) => void;
}

const SearchUsers: React.FC<SearchUsersProps> = ({ onDataFiltered }) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Função para buscar usuários
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:3333/users/:cnpj${CNPJ}');
        console.log(response.data)
        setUsers(response.data);
        onDataFiltered(response.data); // Atualize os dados filtrados assim que a busca for concluída
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, [onDataFiltered]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.CNPJ.toLowerCase().includes(search.toLowerCase())
    );
    onDataFiltered(filtered);
  }, [search, users, onDataFiltered]);

  return (
    <div>
      <input type="search" value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchUsers;

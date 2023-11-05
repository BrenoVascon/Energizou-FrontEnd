
import axios from "axios";

interface DeleteButtonProps {
  
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

function DeleteButton({ CNPJ }: DeleteButtonProps) {
  const handleDelete = () => {
    const confirmDelete = window.confirm("Você tem certeza que quer excluir esse usuário");
    
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3333/users/:cnpj${CNPJ}`)
        .then(() => {
          console.log("Item deleted successfully");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    }
  };

  return (
    <button className="buttonDeleteUser" onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;

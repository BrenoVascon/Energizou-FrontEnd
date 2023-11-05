import axios from "axios";

interface DeleteButtonProps {
  CNPJ: string;
}

function DeleteButton({ CNPJ }: DeleteButtonProps) {
  const handleDelete = () => {
    const confirmDelete = window.confirm("Você tem certeza que quer excluir esse usuário");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3333/users/${CNPJ}`) 
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

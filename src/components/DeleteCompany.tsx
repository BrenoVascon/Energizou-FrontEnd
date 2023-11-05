import axios from "axios";

type DeleteButtonProps = {
  cnpj: string;
};

function DeleteButton({ cnpj }: DeleteButtonProps) {
  const handleDelete = () => {
    const confirmDelete = window.confirm("Você tem certeza que quer excluir esse usuário");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3333/users/${cnpj}`)
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
    <button className="buttonDeleteUser" onClick={() => handleDelete()}>Delete</button>
  );
}

export default DeleteButton;

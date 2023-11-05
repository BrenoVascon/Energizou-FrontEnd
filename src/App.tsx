import { Route, Routes } from "react-router-dom"
import Home from "./pages/Homepage"
import { BrowserRouter } from "react-router-dom"; // Importe o BrowserRouter
import CreateUser from "./components/CompanyRegister";
import ButtonEditUser from "./components/EditCompanyForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/EditUser' element={<ButtonEditUser />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App

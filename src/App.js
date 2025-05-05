import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/Index";
import LogIn from "./Routes/LogIn";
import Register from "./Routes/Register";
import Dashboard from "./Routes/Dashboard";
import Gestionar from "./Routes/Gestionar";
import VerificarUsuario from "./Routes/VerificarUsuario";
import ResetPassword from "./Routes/ResetPassword";
import Recuperar from "./Routes/Recuperar";
import LogOut from "./Routes/Time-out";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/validar" element={<VerificarUsuario />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gestionar-documentos" element={<Gestionar />} />
      </Routes>
    </Router>
  );
}
export default App;
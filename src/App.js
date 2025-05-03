import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/Index";
import LogIn from "./Routes/LogIn";
import Register from "./Routes/Register";
import Dashboard from "./Routes/Dashboard";
import Gestionar from "./Routes/Gestionar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gestionar-documentos" element={<Gestionar />} />
      </Routes>
    </Router>
  );
}
export default App;
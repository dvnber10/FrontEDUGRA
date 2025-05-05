import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Validar = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const handleSubmit = () => {
        if (password === verifyPassword) {
            alert("Contraseña verificada correctamente");
            navigate("/dashboard");

        } else {
            alert("Las contraseñas no coinciden");
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 300, margin: "auto", marginTop: 10 }}
        >
            <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                label="Verificar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={handleSubmit}
            >
                Guardar
            </Button>
        </Box>
    );
};

export default Validar;
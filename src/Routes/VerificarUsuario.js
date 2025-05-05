import React from "react";

import { Box, Typography } from "@mui/material";
import Validar from "../Components/validar";
import { ValidarUsuario } from "../Hooks/Auth";

const VerificarUsuario = () => {
    const mutacion = ValidarUsuario();
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 300, margin: "auto", marginTop: 10 }}
        >
            <Typography variant="h5" gutterBottom>
                Verificar Usuario
            </Typography>
            <Validar mutacion={mutacion} />
        </Box>
    );
}
export default VerificarUsuario;


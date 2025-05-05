import React from "react";

import { Box, Typography } from "@mui/material";
import Validar from "../Components/validar";

const VerificarUsuario = () => {
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
            <Validar />
        </Box>
    );
}
export default VerificarUsuario;


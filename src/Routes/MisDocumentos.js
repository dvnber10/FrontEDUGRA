import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Documentos from '../Components/Documentos';
import NavbarDash from '../Components/NavbarDash';

const MisDocumentos = () => {
    const documentosEjemplo = [
        { id: 1, titulo: 'Documento 1', descripcion: 'Descripción del documento 1' },
        { id: 2, titulo: 'Documento 2', descripcion: 'Descripción del documento 2' },
        { id: 3, titulo: 'Documento 3', descripcion: 'Descripción del documento 3' },
    ];

    const handleActualizar = (id) => {
        console.log(`Actualizar documento con id: ${id}`);
    };

    const handleBorrar = (id) => {
        console.log(`Borrar documento con id: ${id}`);
    };

    return (
        <Box>
            <NavbarDash />
        <Container>
            
            <Typography variant="h4" component="h1" gutterBottom>
                Mis Documentos
            </Typography>
            {documentosEjemplo.map((doc) => (
                <Documentos
                    key={doc.id}
                    documento={doc}
                    onActualizar={handleActualizar}
                    onBorrar={handleBorrar}
                />
            ))}
        </Container>
        </Box>
    );
};

export default MisDocumentos;
import React from 'react';
import { Container } from '@mui/material';
import Foro from '../Components/Foro';
import NavbarDash from '../Components/NavbarDash';

const ForoR = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <NavbarDash />
            <Foro />
            
        </Container>
    );
};

export default ForoR;
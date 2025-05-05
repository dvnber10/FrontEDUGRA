import React from 'react';
import { Typography, Card, CardContent, Grid, Container, Box, Button } from '@mui/material';
import NavbarDash from '../Components/NavbarDash';

const MisForos = () => {
    const forosCreados = [
        { id: 1, titulo: 'Foro de React', descripcion: 'Discusión sobre React y sus características.' },
        { id: 2, titulo: 'Foro de JavaScript', descripcion: 'Todo sobre JavaScript y sus frameworks.' },
        { id: 3, titulo: 'Foro de Desarrollo Web', descripcion: 'Temas generales sobre desarrollo web.' },
    ];

    return (
        <Box>
            <NavbarDash />
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Mis Foros Creados
            </Typography>
            <Grid container spacing={3}>
                {forosCreados.map((foro) => (
                    <Grid item xs={12} md={6} lg={4} key={foro.id}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {foro.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {foro.descripcion}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" color="primary" sx={{ mt: 4 }} onClick={() => window.history.back()}>
                <Typography variant="body1">Volver</Typography>
            </Button>
        </Container>
        </Box>
    );
};

export default MisForos;

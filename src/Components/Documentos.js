import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Documentos = ({ documento, onActualizar, onBorrar }) => {
    return (
        <Card sx={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {documento.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {documento.descripcion}
                </Typography>
                <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => onActualizar(documento.id)}
                        >
                            Actualizar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => onBorrar(documento.id)}
                        >
                            Borrar
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Documentos;
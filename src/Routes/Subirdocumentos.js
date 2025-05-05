import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    Grid,
    Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const SubirDocumentos = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        categoria: '',
        ramaEstudio: '',
        descripcion: '',
        autor: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const cookies = new Cookies();
        const userId = cookies.get('id');
        if (!userId) {
            console.log('No autenticado, cerrando sesión...');
            navigate('/logout');
        }
    }, [navigate]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData, file);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
                <Typography variant="h5" gutterBottom>
                    Subir Documentos
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="categoria"
                                label="Categoría"
                                fullWidth
                                required
                                value={formData.categoria}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="ramaEstudio"
                                label="Rama de Estudio"
                                fullWidth
                                required
                                value={formData.ramaEstudio}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="descripcion"
                                label="Descripción"
                                fullWidth
                                required
                                multiline
                                rows={4}
                                value={formData.descripcion}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="autor"
                                label="Autor"
                                fullWidth
                                required
                                value={formData.autor}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" component="label" fullWidth>
                                Subir Documento
                                <input type="file" hidden onChange={handleFileChange} />
                            </Button>
                        </Grid>
                        {preview && (
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                                    Vista Previa:
                                </Typography>
                                <Box
                                    component="iframe"
                                    src={preview}
                                    sx={{ width: '100%', height: 300, border: '1px solid #ccc' }}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Box display="flex" justifyContent="space-between" mt={3}>
                        <Button variant="contained" color="primary" type="submit">
                            Guardar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleBack}>
                            Volver
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default SubirDocumentos;

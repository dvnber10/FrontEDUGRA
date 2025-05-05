import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar } from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { NewUSer } from '../Hooks/Auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const mutacion = NewUSer();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar que los campos no estén vacíos
        if (!email || !name || !surname || !username || !phone) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        data = {
            email: email,
            name: name,
            surname: surname,
            username: username,
            phone: phone,
        };
        mutacion.mutate(data);

    };
    if (mutacion.isSuccess) {
        // Se envia a la ruta del dashboard con inicio de session
        alert('Usuario creado correctamente, Por favor verifique su correo y valide su cuenta');

        window.location = `/validar`
    }
    const volver = (e) => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonAddOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registrarse
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nombre"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        label="Apellido"
                        name="surname"
                        autoComplete="surname"
                        autoFocus
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nombre Usuario"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Numero de Telefono"
                        label="Numero de Telefono"
                        name="phone"
                        autoComplete="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Validar
                    </Button>
                    <Button
                        onClick={volver}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
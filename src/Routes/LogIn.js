import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { SessionInit } from '../Hooks/Auth'; 
import { useState } from 'react';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let userId = 12
    const cookie = new Cookies();
    const mutacion = SessionInit();
    const handleSubmit = (e) => {
        e.preventDefault();
        data = {
            email: email,
            password: password,
        };
        mutacion.mutate(data);
    };
    if (mutacion.isSuccess) {
        // 
        let usuario = mutacion.data.data.Id
        let token = mutacion.data.data.Token

        // se crea una cookie con el id de usuario 
        cookie.set('id', usuario, { path: '/' })

        cookie.set('token', token, { path: '/' });
        // Se envia a la ruta del dashboard con inicio de session
        
        window.location = `/dashboard`
        
        
    }

    return (
        <Container component="main" maxWidth="xs" color='primary.main'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => navigate('/recuperar')}
                        sx={{ mt: 2 }}
                    >
                        Olvide mi cuenta
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LogIn;
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Button,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';


const user = {
  name: 'Juan Pérez',
  email: 'juan@example.com',
  phone: '+57 300 123 4567',
  role: 'Administrador',
  image: 'https://i.pravatar.cc/300?img=3' // Puedes usar una URL de avatar o dejar vacío para iniciales
};
const UserProfile = () => {
    const navigate = useNavigate();
    function handleBack () {
        navigate(-1);
    };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mt: 4 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Avatar
            alt={user.name}
            src={user.image}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Correo electrónico
            </Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Teléfono
            </Typography>
            <Typography variant="body1">{user.phone}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Rol
            </Typography>
            <Typography variant="body1">{user.role}</Typography>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary">
            Editar Perfil
          </Button>
          <Button onClick={() => handleBack()} variant="outlined" color="secondary" sx={{ ml: 2 }}>
            <ArrowBack />
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfile;

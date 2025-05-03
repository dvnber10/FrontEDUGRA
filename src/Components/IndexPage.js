import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia } from '@mui/material';
import {  CloudUpload } from '@mui/icons-material';
import Navbar from './navbar';

const HomePage = () => {
  return (
    <>
        <Navbar />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Box textAlign="center" mb={5}>
          <CloudUpload sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h3" gutterBottom>
            Bienvenido al Foro Académico
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Una plataforma colaborativa donde los estudiantes pueden compartir, consultar
            y discutir documentos académicos como trabajos, ensayos, resúmenes, y mucho más.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            Explorar documentos
          </Button>
        </Box>

        <Typography variant="h5" gutterBottom>
          Explora, aprende y comparte
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Nuestra comunidad está centrada en el crecimiento académico. Puedes subir tus
          documentos, descubrir nuevos recursos, y colaborar con otros estudiantes
          para mejorar el conocimiento colectivo.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Libros académicos"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Estudiantes compartiendo ideas"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

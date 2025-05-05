import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Card,
    CardContent,
    CardActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Foro = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const navigate = useNavigate();

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() !== '') {
            setPosts([...posts, { id: Date.now(), content: newPost }]);
            setNewPost('');
        }
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };
    const handleBack = () => {
        navigate(-1); // Volver a la página anterior

    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Foro
            </Typography>
            <Box component="form" onSubmit={handlePostSubmit} sx={{ mb: 4 }}>
                <TextField
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Publicar
                </Button>

                <Button onClick={() => handleBack()} variant='contained' color="primary" fullWidth sx={{ mt: 2 }}>
                    Volver
                </Button>
            </Box>
            <Box>
                {posts.length === 0 ? (
                    <Typography variant="body1" color="textSecondary">
                        No hay publicaciones aún.
                    </Typography>
                ) : (
                    posts.map((post) => (
                        <Card key={post.id} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="body1">{post.content}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="error"
                                    onClick={() => handleDeletePost(post.id)}
                                >
                                    Eliminar
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                )}
            </Box>
        </Container>
    );
};

export default Foro;
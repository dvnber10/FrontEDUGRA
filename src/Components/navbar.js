import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { School } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const onSubmmitLogin = () => {
    navigate('/Login');
    }
    const onSubmitRegister = () => {
        navigate('/Register');
    }
    return (
        <AppBar position="static" color="primary">
                <Toolbar>
                  <School sx={{ mr: 2 }} />
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    EDUGRA!!!
                  </Typography>
                  <Button onClick={onSubmmitLogin} color="inherit" sx={{ margin: '3px' }}>Iniciar sesión</Button>
                  <Button onClick={onSubmitRegister} color="inherit" sx={{ margin: '3px' }}>Registrarse</Button>
                </Toolbar>
              </AppBar>
        
    );
    }
export default Navbar;

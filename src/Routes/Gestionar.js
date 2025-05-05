import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDash from '../Components/NavbarDash';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

const Gestionar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const cookie = new Cookies();
    const cook = cookie.get('id');
        
        useEffect(() => {
        if (!cook) {
          navigate('/logout'); // Hay que crear la ruta time out que es el cierre de sesioón
        }
      }, [cook, navigate])

    return (

        <div>
            <NavbarDash />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '50px', justifyContent: 'space-between', marginLeft: '20px' }}>
                <button
                    style={buttonStyle}
                    onClick={() => handleNavigation('/subir-documentos')}
                >
                    Subir Documentos
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => handleNavigation('/mis-documentos')}
                >
                    Mis Documentos
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => handleNavigation('/crear-foro')}
                >
                    Crear Foro
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => handleNavigation('/mis-foros')}
                >
                    Mis Foros
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => handleNavigation('/dashboard')}
                >
                    Volver
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'center',
};

export default Gestionar;
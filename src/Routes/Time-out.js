import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = cookies.get('id');

        if (userId) {
            cookies.remove('id', { path: '/' });
            console.log(`User with ID ${userId} has been logged out.`);
        }

        navigate('/login');
    }, [navigate]); 

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;

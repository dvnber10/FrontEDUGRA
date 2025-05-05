
import axios from "axios";

export const URL = 'La url de su api';
// export const URL = 'https://localhost:44310/api/'; ejemplo de url

export let token;
// Inicio de session 
export async function InicioUser(data) {
    const result = await axios.post(`${URL}/User/LogIn`, {
        email: data.mail,
        pass: data.password
    })
    token = result.data.Token
    return result
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    const result = await axios.post(`${URL}/User/SigIn`, {
        userName: data.name,
        apellido: data.apellido,
        email: data.email,
        userName: data.userName,
        phone: data.telefono,
    })
    token = result.data.Token
    localStorage.setItem('token', token);
    return result
}
export async function ValidarUser(data) {
    const result = await axios.post(`${URL}/Validar`, {
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword
    })
    token = result.data.Token
    localStorage.setItem('token', token);
    return result
}
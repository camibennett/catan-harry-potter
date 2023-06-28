import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import jwt_decode from "jwt-decode";


function Login() {
    const {token, setToken} = useContext(AuthContext);
    const {user_id, setUserId} = useContext(AuthContext);
    // let user_id = null;
    // if (token !== null) {
    //     user_id = jwt_decode(token).sub;
    // }
    const [mail, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("apretaste el form")
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, 
        {
            mail, 
            contrasena
        }
        ).then((response) => {
            console.log(response);
            setError(false);
            setMsg('Login exitoso');
            // Guardar el token en el local storage
            const access_token = response.data.access_token;
            // const user_id = response.data.user_id;
            // console.log('access_token 1');
            setToken(access_token);
            // console.log('access_token 2');
            // setUserId(jwt_decode(access_token).sub || null);
            // console.log('access_token 3');
            let initialUserId = null;
            if (access_token) {
                try {
                    const decodedToken = jwt_decode(token);
                    if (decodedToken.sub) {
                    initialUserId = decodedToken.sub;
                    }
                } catch (error) {
                    console.log('Error decoding token:', error);
                }
            }
            setUserId(initialUserId);
            

        }).catch((error) => {
            console.log(error);
            setMsg('credenciales incorrectas');
        });
    };

    return (
        <main className="content">
        <div className="bg-container-login"></div>
        <div className="Login">
            <h1>¡Bienvenido!</h1> 
            <h2>Inicia tu sesión a continuación</h2>

            <p>{msg}</p>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="mail"
                        value={mail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />  
                </label>
                <input type="submit" value="Enviar" />
                
            </form>
            
        </div>
        </main>
        
    );
}

export default Login;
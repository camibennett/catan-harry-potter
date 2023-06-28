import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp() {
    const [mail, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [nombre, setName] = useState('');
    const puntos = 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("apretaste el form")
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/signup`, 
        {
            nombre,
            mail, 
            contrasena, 
            puntos
        }
        ).then((response) => {
            console.log(response);
            // redirigir a login
            window.location.href = '/login';
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <main className="content">
        <div className="bg-container-signup"></div>
        <div className="SignUp">
            <h1>¿Eres nuevo aquí?</h1>
            <h2>¡Registrate a continuación!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="name"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
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

export default SignUp;
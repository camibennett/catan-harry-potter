import React, {useContext, useState} from "react";
import './Login.css';
import { AuthContext } from "../auth/AuthContext";
import './LogOut.css';

const LogOutButton = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const handleLogout = () => {
        logout();
        setMsg('Logout exitoso');
    };

    return (
        <main className="content">
        <div className="bg-container-logout"></div>
        <div className="Logout">
            <h1>¿Ya te vas?</h1>
            <h2>¡Vuelve pronto!</h2>
        <>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        {msg.length > 0 && <div className="successMsg">{msg}</div>}
        </>
        </div>
        </main>
    )
}

export default LogOutButton;
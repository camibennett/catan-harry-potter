import './main_page.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
  const [topUsuarios, setTopUsuarios] = useState([]);
  
  useEffect(() => {
    cargarRanking();
  }, []);

  const cargarRanking = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ranking`)
      .then((response) => {
        const data = response.data;
        const usuarios = Object.keys(data).map((key) => data[key]);
        setTopUsuarios(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="main-main-page">
      <div className="bg-container-main-page"></div>
      <div className="content">
        <h1>¿Qué es <h2 class="name">War of Houses?</h2></h1>
        <p>War of Houses es un juego multijugador de gestión de recursos inspirado en el mítico 
                mundo de Harry Potter, en el cual las 4 casas de Hogwards, Griffindor, Slytherin, Ravenclaw 
                y Huffelpuf, deben competir entre sí. En el juego deberemos construir cabañas y escobas 
                que evolucionarán a castillos gracias a la gestión de cartas de recursos que iremos 
                acumulando en nuestra mano.</p>

        <p>La mecánica del juego es sencilla: tiramos los dados, recogemos los recursos que estos 
                hayan generado y finalmente construimos cabañas, escobas y castillos, siempre que 
                dispongamos de los recursos necesarios para poderlos construir. Ya ves que su 
                dinámica es sencilla y el objetivo del juego para ganar es conseguir tener 10 
                snitches doradas.</p>

      </div>
      <div className="content">
        <br></br>
        <h1>Ranking<h2 class="name">de nuestros jugadores</h2></h1>
        <table className="tabla">
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Usuario</th>
              <th>Puntos totales</th>
            </tr>
          </thead>
          <tbody>
            {topUsuarios.map((usuario, index) => (
              <tr key={index + 1}>
                <td>{index + 1}º</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </main>
  )
}

export default MainPage;
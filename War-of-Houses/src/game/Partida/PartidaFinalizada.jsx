
import { Link } from "react-router-dom";
import './partidafinalizada.css';
import { useLocation } from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import { AuthContext } from '../../auth/AuthContext';
import axios from 'axios';
import Gryffindor from '../../assets/img/gryffindor.png';
import Slytherin from '../../assets/img/slytherin.png';
import Ravenclaw from '../../assets/img/ravenclaw.png';
import Hufflepuff from '../../assets/img/hufflepuff.png';


function PartidaFinalizada() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idPartida = searchParams.get("idPartida");
  const {token} = useContext(AuthContext);
  const [casaGanador, setCasaGanador] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState(null);
  const [fotoCasaGanador, setFotoCasaGanador] = useState(null);

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/estado_partida/${idPartida}`, {
        headers: headers
      })
      .then((response) => {
        const idJugadorGanador = response.data.ganador;
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/jugadores/${idJugadorGanador}`, {
            headers: headers
          })
          .then((response) => {
            const jugador = response.data;
            setCasaGanador(jugador.casa);
            const idUsuario = jugador.idUsuario;
            axios
              .get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${idUsuario}`, {
                headers: headers
              })
              .then((response) => {
                const usuario = response.data;
                setNombreUsuario(usuario.nombre);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idPartida, headers]);
  
  useEffect(() => {
    if (casaGanador === "gryffindor") {
      setFotoCasaGanador(Gryffindor);
    } else if (casaGanador === "slytherin") {
      setFotoCasaGanador(Slytherin);
    } else if (casaGanador === "ravenclaw") {
      setFotoCasaGanador(Ravenclaw);
    } else if (casaGanador === "hufflepuff") {
      setFotoCasaGanador(Hufflepuff);
    }
  }, [casaGanador]);
  
  return (
    <main className="content-partidafinalizada">
        <div className="bg-container-partidafinalizada"></div>
        <div className="div-partidafinalizada">
        <h1 className="titulo-instrucciones">¡Partida de <span className="name-instructions">War of Houses</span> finalizada!</h1>
        <p className="parrafo-instrucciones" id="text-instruction-5"> Felicitaciones {nombreUsuario}! Has ganado la partida con la casa {casaGanador}!
        </p>
        <img className='carta-logo' src={fotoCasaGanador}></img>
            <Link className="play-button" to="/partidas">
                Volver a partidas
            </Link>
        </div>

    </main>
  )
}

export default PartidaFinalizada;
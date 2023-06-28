import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme
import React, {createContext, useState, useEffect, useContext} from "react";
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex} from 'react-hexgrid';
import jwt_decode from 'jwt-decode';
import './partida.css'
import Image1 from '../../assets/img/bosque_prohibido.jpg'
import Image2 from '../../assets/img/cabaña_hagrid.jpg'
import Image3 from '../../assets/img/chamber.png'
import Image4 from '../../assets/img/diagonal_alley.jpg'
import Image5 from '../../assets/img/oficina_dumbledore.jpg'
import Image6 from '../../assets/img/cabana-roja.png'
import Image7 from '../../assets/img/logo_howards.png'
import CartaDragon from '../../assets/img/huevo-dragon.jpg'
import CartaPhoenix from '../../assets/img/pluma-pheonix.jpg';
import CartaUnicornio from '../../assets/img/pelo-unicornio.jpg';
import CartaVarita from '../../assets/img/varita-magica.jpg';
import CartaSerpiente from '../../assets/img/diente-serpiente.jpg';
import CabanaRoja from '../../assets/img/cabana-roja-grande.png';
import CabanaVerde from '../../assets/img/cabana-verde.png';
import CabanaAzul from '../../assets/img/cabana-azul-grande.png';
import CabanaAmarilla from '../../assets/img/cabana-amarilla.png';
import CastilloRojo from '../../assets/img/castillo-rojo-grande.png';
import CastilloVerde from '../../assets/img/castillo-verde.png';
import CastilloAzul from '../../assets/img/castillo-azul.png';
import CastilloAmarillo from '../../assets/img/castillo-amarillo.png';
import EscobaRojaRecto from '../../assets/img/escoba-roja-recto.png';
import EscobaRojaDerecha from '../../assets/img/escoba-roja-derecha.png';
import EscobaRojaIzquierda from '../../assets/img/escoba-roja-izquierda.png';
import EscobaAzulRecto from '../../assets/img/escoba-azul-recta.png';
import EscobaAzulDerecha from '../../assets/img/escoba-azul-derecha.png';
import EscobaAzulIzquierda from '../../assets/img/escoba-azul-izquierda.png';
import EscobaVerdeRecto from '../../assets/img/escoba-verde-recto.png';
import EscobaVerdeDerecha from '../../assets/img/escoba-verde-derecha.png';
import EscobaVerdeIzquierda from '../../assets/img/escoba-verde-izquierda.png';
import EscobaAmarillaRecto from '../../assets/img/escoba-amarilla-recto.png';
import EscobaAmarillaDerecha from '../../assets/img/escoba-amarilla-derecha.png';
import EscobaAmarillaIzquierda from '../../assets/img/escoba-amarilla-izquierda.png';
import Gryffindor from '../../assets/img/gryffindor.png';
import Slytherin from '../../assets/img/slytherin.png';
import Ravenclaw from '../../assets/img/ravenclaw.png';
import Hufflepuff from '../../assets/img/hufflepuff.png';


function Partida () {
    // const navigate = useNavigate();

    const hexagonSize = { x: 18, y: 10 };
    const hexagonSize3 = { x: 10, y: 10 };
    const [queQuiereComprar, setQueQuiereComprar] = useState("");
    const [puedeComprar, setPuedeComprar] = useState(false);
    const [cartasDragon, setCartasDragon] = useState(null);
    const [cartasVarita, setCartasVarita] = useState(null);
    const [cartasPhoenix, setCartasPhoenix] = useState(null);
    const [cartasUnicornio, setCartasUnicornio] = useState(null);
    const [cartasSerpiente, setCartasSerpiente] = useState(null);
    const [logoJugador, setLogoJugador] = useState(null);
    const [resultadoDado, setResultadoDado] = useState(null);
    const [turnoActual, setTurnoActual] = useState(null);
    const [miTurno, setMiTurno] = useState(false);
    const [casaTurnoActual, setCasaTurnoActual] = useState(null);
    const [partidaFinalizada, setPartidaFinalizada] = useState(false);
    const [puntajeRojo, setPuntajeRojo] = useState(0);
    const [puntajeAzul, setPuntajeAzul] = useState(0);
    const [puntajeVerde, setPuntajeVerde] = useState(0);
    const [puntajeAmarillo, setPuntajeAmarillo] = useState(0);
    const [mensaje, setMensaje] = useState("Bienvenido a la partida");
    const [yaLanzoDado, setYaLanzoDado] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idPartida = searchParams.get("idPartida");
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [seconds, setSeconds] = useState(0);

    const { user_id } = useContext(AuthContext);
    

    const {token} = useContext(AuthContext);

    const headers = {
      Authorization: `Bearer ${token}`
    };

    const [fotoPos, setFotoPos] = useState(
      {'foto_pos_1_2_5': 'pat-logo', 'foto_pos_1_3_5': 'pat-logo', 'foto_pos_2_4_7': 'pat-logo',
      'foto_pos_2_5_7': 'pat-logo', 'foto_pos_3_5_8': 'pat-logo', 'foto_pos_3_6_8': 'pat-logo',
      'foto_pos_4_7_9': 'pat-logo', 'foto_pos_5_7_10': 'pat-logo', 'foto_pos_5_8_10': 'pat-logo',
      'foto_pos_6_8_11': 'pat-logo', 'foto_pos_7_9_12': 'pat-logo', 'foto_pos_7_10_12': 'pat-logo',
      'foto_pos_8_10_13': 'pat-logo', 'foto_pos_8_11_13': 'pat-logo', 'foto_pos_9_12_14': 'pat-logo',
      'foto_pos_10_12_15': 'pat-logo', 'foto_pos_10_13_15': 'pat-logo', 'foto_pos_11_13_16': 'pat-logo',
      'foto_pos_12_14_17': 'pat-logo', 'foto_pos_12_15_17': 'pat-logo', 'foto_pos_13_15_18': 'pat-logo',
      'foto_pos_13_16_18': 'pat-logo', 'foto_pos_15_17_19': 'pat-logo', 'foto_pos_15_18_19': 'pat-logo',
      'foto_pos_1_2': 'pat-logo', 'foto_pos_1_3': 'pat-logo', 'foto_pos_1_5': 'pat-logo',
      'foto_pos_2_4': 'pat-logo', 'foto_pos_2_5': 'pat-logo', 'foto_pos_2_7': 'pat-logo',
      'foto_pos_3_5': 'pat-logo', 'foto_pos_3_6': 'pat-logo', 'foto_pos_3_8': 'pat-logo',
      'foto_pos_4_7': 'pat-logo', 'foto_pos_4_9': 'pat-logo', 'foto_pos_5_7': 'pat-logo',
      'foto_pos_5_8': 'pat-logo', 'foto_pos_5_10': 'pat-logo', 'foto_pos_6_8': 'pat-logo',
      'foto_pos_6_11': 'pat-logo', 'foto_pos_7_9': 'pat-logo', 'foto_pos_7_10': 'pat-logo',
      'foto_pos_7_12': 'pat-logo', 'foto_pos_8_10': 'pat-logo', 'foto_pos_8_11': 'pat-logo',
      'foto_pos_8_13': 'pat-logo', 'foto_pos_9_12': 'pat-logo', 'foto_pos_9_14': 'pat-logo',
      'foto_pos_10_12': 'pat-logo', 'foto_pos_10_13': 'pat-logo', 'foto_pos_10_15': 'pat-logo',
      'foto_pos_11_13': 'pat-logo', 'foto_pos_11_16': 'pat-logo', 'foto_pos_12_14': 'pat-logo',
      'foto_pos_12_15': 'pat-logo', 'foto_pos_12_17': 'pat-logo', 'foto_pos_13_15': 'pat-logo',
      'foto_pos_13_16': 'pat-logo', 'foto_pos_13_18': 'pat-logo', 'foto_pos_14_17': 'pat-logo',
      'foto_pos_15_17': 'pat-logo', 'foto_pos_15_18': 'pat-logo', 'foto_pos_15_19': 'pat-logo',
      'foto_pos_16_18': 'pat-logo', 'foto_pos_17_19': 'pat-logo', 'foto_pos_18_19': 'pat-logo'
      }
    );

    const [jugador, setJugador] = useState({});

    useEffect(() => {
      obtenerJugador();
      obtenerUsuario();
      // Agregamos user_id como dependencia para que se ejecute el efecto cada vez que user_id cambie
    }, [user_id]);
    
    useEffect(() => {
      obtenerTurno();
      // cargarPartida();
    }, [turnoActual, jugador]);

    useEffect(() => {
      cargarPartida();
    });

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    //   }, 2000);
    //   return () => {clearInterval(interval), cargarPartida()};
    // }, []);

    const obtenerUsuario = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${user_id}`, {
          headers: headers
        })
        .then((response) => {
          const data = response.data;
          const usuario = data;
          console.log(usuario);
          setNombreUsuario(usuario.nombre);
        })
        .catch((error) => {
          console.log(error);
        });
  
    };

    const obtenerJugador = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/obtener_id_jugador/${idPartida}/${user_id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          const jugador = response.data;
          console.log(jugador);
          setJugador(jugador);
          if (jugador.casa === 'gryffindor') {
            setLogoJugador(Gryffindor);
          } else if (jugador.casa === 'slytherin'){
            setLogoJugador(Slytherin);
          } else if (jugador.casa === 'ravenclaw'){
            setLogoJugador(Ravenclaw);
          } else if (jugador.casa === 'hufflepuff'){
            setLogoJugador(Hufflepuff);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const obtenerTurno = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/estado_partida/${idPartida}`, {
          headers: headers
        })
        .then((response) => {
          //Determinamos si es su turno y de qué jugador es el turno
          if (response.data["turno_actual"] === jugador.turno) {
            setMiTurno(true);
            setMensaje("¡Estas de suerte! Ya es tu turno, elige qué quieres hacer utilizado los botones");
          } else {
            setMiTurno(false);
            setMensaje("No es tu turno todavía... espera a que tus contrincantes terminen sus estrategias");
          }
          
          // Casa del jugador que es su turno
          if (response.data["jugador_rojo"]["turno"] === response.data["turno_actual"]){
            setCasaTurnoActual("Griffindor");
          } else if (response.data["jugador_verde"]["turno"] === response.data["turno_actual"]) {
            setCasaTurnoActual("Slytherin");
          }  else if (response.data["jugador_azul"]["turno"] === response.data["turno_actual"]) {
            setCasaTurnoActual("Ravenclaw");
          }  else if (response.data["jugador_amarillo"]["turno"] === response.data["turno_actual"]) {
            setCasaTurnoActual("Hufflepuff");
          }
        })
        .catch((error) => {
          console.log(error);
        });
  
    };
  
    const cargarPartida = () => {
      console.log("CARGAR PARTIDA");
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/estado_partida/${idPartida}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          
          //Setemos turno actual
          setTurnoActual(response.data["turno_actual"]);
          
          // Vemos si la partida finalizó
          if (response.data["ganador"] !== null) {
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/finalizar_partida`, 
              {idJugadorGanador: response.data["ganador"]},
              {headers: headers}
            )
            .then((response) => {
              console.log(response.data);
              setYaLanzoDado(false);
              setPartidaFinalizada(true);
              window.location.href = `/partidafinalizada?idPartida=${idPartida}`;
            })
            .catch((error) => {
              console.log(error);
            });
            
          } else if (response.data["ganador"] === null) {
            setPartidaFinalizada(false);
          }
          
          if (jugador.id === response.data["jugador_rojo"]["id"]) {
            console.log("Cartas rojas");
            setCartasDragon(response.data["jugador_rojo"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_rojo"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_rojo"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_rojo"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_rojo"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_verde"]["id"]) {
            setCartasDragon(response.data["jugador_verde"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_verde"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_verde"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_verde"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_verde"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_azul"]["id"]) {
            setCartasDragon(response.data["jugador_azul"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_azul"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_azul"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_azul"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_azul"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_amarillo"]["id"]) {
            setCartasDragon(response.data["jugador_amarillo"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_amarillo"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_amarillo"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_amarillo"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_amarillo"]["cantVaritas"]);
          } 
          
          console.log(response.data["jugador_rojo"]["cabanas"]);
          const cabanas_rojas = response.data["jugador_rojo"]["cabanas"];
          console.log(cabanas_rojas);
          Object.keys(cabanas_rojas).forEach((key) => {
            const pos = cabanas_rojas[key]["posicion"].split(",").join("_");
            console.log(pos);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos}`]: 'pat-cabana-roja'
            }));
            // setFotoPos({...fotoPos, [`foto_pos_${pos}`]: 'pat-cabana-roja'});
            //fotoPos[`foto_pos_${pos}`] = 'pat-cabana-roja';
            // // poner en hexagono como fill = {foto_pos['foto_pos_1_2_5']}
            // foto_pos['foto_pos_1_2_5'] = 'pat-cabana-roja';
            
          });


          const cabanas_verdes = response.data["jugador_verde"]["cabanas"];
          console.log(cabanas_verdes);
          Object.keys(cabanas_verdes).forEach((key) => {
            const pos_verde = cabanas_verdes[key]["posicion"].split(",").join("_");
            console.log(pos_verde);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_verde}`]: 'pat-cabana-verde'
            }));
          });

          const cabanas_azules = response.data["jugador_azul"]["cabanas"];
          console.log(cabanas_azules);
          Object.keys(cabanas_azules).forEach((key) => {
            const pos_azul = cabanas_azules[key]["posicion"].split(",").join("_");
            console.log(pos_azul);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_azul}`]: 'pat-cabana-azul'
            }));
            //setFotoPos({...fotoPos, [`foto_pos_${pos_azul}`]: 'pat-cabana-azul'});
            //fotoPos[`foto_pos_${pos_azul}`] = 'pat-cabana-azul';
            // // poner en hexagono como fill = {foto_pos['foto_pos_1_2_5']}
            // foto_pos['foto_pos_1_2_5'] = 'pat-cabana-roja';
            
            
          });
          const cabanas_amarillas = response.data["jugador_amarillo"]["cabanas"];
          console.log(cabanas_amarillas);
          Object.keys(cabanas_amarillas).forEach((key) => {
            const pos_amarilla = cabanas_amarillas[key]["posicion"].split(",").join("_");
            console.log(pos_amarilla);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_amarilla}`]: 'pat-cabana-amarilla'
            }));
          });

          const castillos_rojos = response.data["jugador_rojo"]["castillos"];
          console.log(castillos_rojos);
          Object.keys(castillos_rojos).forEach((key) => {
            const pos_castillo_rojo = castillos_rojos[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_rojo);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_rojo}`]: 'pat-castillo-rojo'
            }));
          });
          
          const castillos_verdes = response.data["jugador_verde"]["castillos"];
          console.log(castillos_verdes);
          Object.keys(castillos_verdes).forEach((key) => {
            const pos_castillo_verde = castillos_verdes[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_verde);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_verde}`]: 'pat-castillo-verde'
            }));
          });


          const castillos_azules = response.data["jugador_azul"]["castillos"];
          console.log(castillos_azules);
          Object.keys(castillos_azules).forEach((key) => {
            const pos_castillo_azul = castillos_azules[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_azul);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_azul}`]: 'pat-castillo-azul'
            }));
          });


          const castillos_amarillos = response.data["jugador_amarillo"]["castillos"];
          console.log(castillos_amarillos);
          Object.keys(castillos_amarillos).forEach((key) => {
            const pos_castillo_amarillo = castillos_amarillos[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_amarillo);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_amarillo}`]: 'pat-castillo-amarillo'
            }));
          });

          const escobas_rojas = response.data["jugador_rojo"]["escobas"];
          console.log(escobas_rojas);
          Object.keys(escobas_rojas).forEach((key) => {
            const pos_escoba_roja = escobas_rojas[key]["posicion"].split(",").join("_");
            const rotacion_escoba_roja = escobas_rojas[key]["rotacion"];
            if (rotacion_escoba_roja === 0) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_roja}`]: 'pat-escoba-roja-recto'
              }));
            } else if (rotacion_escoba_roja === 1) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_roja}`]: 'pat-escoba-roja-derecha'
              }));
            } else if (rotacion_escoba_roja === 2) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_roja}`]: 'pat-escoba-roja-izquierda'
              }));
            }
          });

          const escobas_verdes = response.data["jugador_verde"]["escobas"];
          console.log(escobas_verdes);
          Object.keys(escobas_verdes).forEach((key) => {
            const pos_escoba_verde = escobas_verdes[key]["posicion"].split(",").join("_");
            const rotacion_escoba_verde = escobas_verdes[key]["rotacion"];
            if (rotacion_escoba_verde === 0) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_verde}`]: 'pat-escoba-verde-recto'
              }));
            } else if (rotacion_escoba_verde === 1) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_verde}`]: 'pat-escoba-verde-derecha'
              }));
            } else if (rotacion_escoba_verde === 2) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_verde}`]: 'pat-escoba-verde-izquierda'
              }));
            }
          });

          const escobas_azules = response.data["jugador_azul"]["escobas"];
          console.log(escobas_azules);
          Object.keys(escobas_azules).forEach((key) => {
            const pos_escoba_azul = escobas_azules[key]["posicion"].split(",").join("_");
            const rotacion_escoba_azul = escobas_azules[key]["rotacion"];
            if (rotacion_escoba_azul === 0) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_azul}`]: 'pat-escoba-azul-recto'
              }));
            } else if (rotacion_escoba_azul === 1) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_azul}`]: 'pat-escoba-azul-derecha'
              }));
            } else if (rotacion_escoba_azul === 2) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_azul}`]: 'pat-escoba-azul-izquierda'
              }));
            }
          });
          
          const escobas_amarillas = response.data["jugador_amarillo"]["escobas"];
          console.log(escobas_amarillas);
          Object.keys(escobas_amarillas).forEach((key) => {
            const pos_escoba_amarilla = escobas_amarillas[key]["posicion"].split(",").join("_");
            const rotacion_escoba_amarilla = escobas_amarillas[key]["rotacion"];
            if (rotacion_escoba_amarilla === 0) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_amarilla}`]: 'pat-escoba-amarilla-recto'
              }));
            } else if (rotacion_escoba_amarilla === 1) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_amarilla}`]: 'pat-escoba-amarilla-derecha'
              }));
            } else if (rotacion_escoba_amarilla === 2) {
              setFotoPos(fotoPos => ({
                ...fotoPos,
                [`foto_pos_${pos_escoba_amarilla}`]: 'pat-escoba-amarilla-izquierda'
              }));
            }
          });

          //Puntajes Jugadores
          setPuntajeRojo(response.data["jugador_rojo"]["puntosVictoria"]);
          setPuntajeAzul(response.data["jugador_azul"]["puntosVictoria"]);
          setPuntajeVerde(response.data["jugador_verde"]["puntosVictoria"]);
          setPuntajeAmarillo(response.data["jugador_amarillo"]["puntosVictoria"]);


        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleBotonLanzarDado = () => {
      if (miTurno && !yaLanzoDado) {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/lanzar_dados`, 
          {idPartida: idPartida},
          {headers: headers}
        )
        .then((response) => {
          console.log(response.data);
          setResultadoDado(response.data["resultado"]);

          if (jugador.id === response.data["jugador_rojo"]["id"]) {
            setCartasDragon(response.data["jugador_rojo"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_rojo"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_rojo"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_rojo"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_rojo"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_verde"]["id"]) {
            setCartasDragon(response.data["jugador_verde"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_verde"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_verde"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_verde"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_verde"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_azul"]["id"]) {
            setCartasDragon(response.data["jugador_azul"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_azul"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_azul"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_azul"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_azul"]["cantVaritas"]);
          } else if (jugador.id === response.data["jugador_amarillo"]["id"]) {
            setCartasDragon(response.data["jugador_amarillo"]["cantDragones"]);
            setCartasPhoenix(response.data["jugador_amarillo"]["cantPhoenix"]);
            setCartasSerpiente(response.data["jugador_amarillo"]["cantSerpientes"]);
            setCartasUnicornio(response.data["jugador_amarillo"]["cantUnicornios"]);
            setCartasVarita(response.data["jugador_amarillo"]["cantVaritas"]);
          } 
          setMensaje("¡Enhorabuena! Lanzaste el dado, ve si aumentaron tus materias primas. Ahora puedes comprar elementos o finalizar tu turno");
          setYaLanzoDado(true);

          //cargarPartida(); // Actualizamos la partidas
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    };

    const handleBotonFinalizarTurno = () => {
      if (miTurno && yaLanzoDado) {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/actualizar_turno`, {
          idPartida: idPartida}, 
          {headers: headers}
        )
        .then((response) => {
          console.log(response.data);
          setMensaje("Turno finalizado");
          setTurnoActual(response.data["turnoActual"]);
          setYaLanzoDado(false);
          cargarPartida(); // Actualizamos la partida 
        })
        .catch((error) => {
          console.log(error);
        });
        setQueQuiereComprar(null);
        setPuedeComprar(false);
      }
      
    };

    const handleBotonComprarCabana = () => {
      if (miTurno && yaLanzoDado) {
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/comprar_cabana/${jugador.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setMensaje(response.data["msg"]);
          if (response.data["bool"]) {
            console.log("MIRAR ACA")
            console.log(queQuiereComprar);
            console.log(puedeComprar);
            setQueQuiereComprar("cabana");
            setPuedeComprar(true);
            console.log(queQuiereComprar);
            console.log(puedeComprar);
          }
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    };

    const handleBotonComprarCastillo = () => {
      if (miTurno && yaLanzoDado) {
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/comprar_castillo/${jugador.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setMensaje(response.data["msg"]);
          if (response.data["bool"]) {
            setQueQuiereComprar("castillo");
            setPuedeComprar(true);
          }
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    };

    const handleBotonComprarEscoba = () => {
      if (miTurno && yaLanzoDado) {
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/comprar_escoba/${jugador.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setMensaje(response.data["msg"]);
          if (response.data["bool"]) {
            setQueQuiereComprar("escoba");
            setPuedeComprar(true);
          }
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    };

    const handleComprar = (pos) => {
      if (miTurno && yaLanzoDado) {
        console.log(pos);
        console.log("Intentando comprar");
        console.log(puedeComprar);

        if (puedeComprar) {
          if (queQuiereComprar === "cabana") {
            console.log("Comprar cabaña");
            setMensaje("Intentando comprar una cabaña");
            handleComprarCabana(pos);
          } else if (queQuiereComprar === "castillo") {
            console.log("Comprar castillo");
            setMensaje("Intentando comprar un castillo");
            handleComprarCastillo(pos);
          }
        }
      }
      
    };

    const handleComprarCabana = (pos) => {
      if (miTurno && yaLanzoDado) {
        console.log("ACAAAAAAAAAA")
      console.log(pos);
      const lista_pos = pos.split("_");
      console.log(lista_pos);
      console.log(jugador.id);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/guardar_cabana`, {
          idJugador: jugador.id,
          posicion1: lista_pos[0],
          posicion2: lista_pos[1],
          posicion3: lista_pos[2]}, 
          {headers: headers }
        )
        .then((response) => {
          setMensaje("Cabaña comprada correctamente :)");
          console.log(response.data);
          console.log("hola Holaaaaaa")
          setQueQuiereComprar(null);
          setPuedeComprar(false);
          console.log(queQuiereComprar);
          console.log(puedeComprar);
          console.log("chao Chaooooo")
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          setMensaje("No fue posible colocar tu cabaña en ese lugar :(");
          console.log(error);
          setQueQuiereComprar(null);
          setPuedeComprar(false);
          console.log(queQuiereComprar);
          console.log(puedeComprar);
        });
      }
      
      
    };

    const handleComprarCastillo = (pos) => {
      if (miTurno && yaLanzoDado) {
        const lista_pos = pos.split("_");
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/guardar_castillo`, {
            idJugador: jugador.id,
            posicion1: lista_pos[0],
            posicion2: lista_pos[1],
            posicion3: lista_pos[2]}, 
            {headers: headers}
          )
          .then((response) => {
            console.log(response.data);
            setMensaje("Castillo comprado correctamente :)");
            cargarPartida(); // Actualizamos las partidas 
          })
          .catch((error) => {
            setMensaje("No fue posible colocar tu castillo en ese lugar :(")
            console.log(error);
          });
        setQueQuiereComprar(null);
        setPuedeComprar(false);
      }
      
    };

    const handleComprarEscoba = (pos, rotacion) => {
      if (miTurno && yaLanzoDado) {
        console.log("Intentando colocar escoba");
        console.log(pos);
        console.log(rotacion);
        const lista_pos = pos.split("_");
        
        if (puedeComprar){
          //Si es que efectivamente puede comprar la escoba, que llame a guarda_escoba
          axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/guardar_escoba`,
            {idJugador: jugador.id,
            posicion1: lista_pos[0],
            posicion2: lista_pos[1], 
            rotacion: rotacion},
            {headers: headers} 
          )
          .then((response) => {
            setMensaje("Escoba comprada correctamente :)");
            console.log(response.data);
            cargarPartida(); // Actualizamos las partidas
          })
          .catch((error) => {
            setMensaje("No fue posible colocar tu escoba en ese lugar :(");
            console.log(error);
          });
        }
        setQueQuiereComprar(null);
        setPuedeComprar(false);
      }
      
    };

    return (
      
      <main className="content-partida">
      <div className="div-grande">
      <div className="div-partida">

        <div className='div-izquierdo-partida'>
          <div className="div-info-usuario">
              <h2>Usuario {nombreUsuario}</h2>
              <img className='carta-usuario' src={logoJugador}></img>
          </div>
          <div className="div-info-partida">
            <h1>Turno actual: {casaTurnoActual} </h1>
            <br></br>
            <div className="div-puntajes-jugadores">
              <h1>Puntajes jugadores:</h1>
              <br></br>
              <br></br>
              <p>Griffindor: {puntajeRojo}</p>
              <br></br>
              <p>Ravenclaw: {puntajeAzul}</p>
              <br></br>
              <p>Slytherin: {puntajeVerde}</p>
              <br></br>
              <p>Huffelpuff: {puntajeAmarillo}</p>
            </div>
          </div>
        </div>

        <div className='div-board-partida'>
          {/* <img src={Image6} id='cabana'></img> */}
          <HexGrid width={1000} height={800} viewBox="-50 -50 100 100">  {/* aca se cambia el tamaño del board */}
            {/* Grid with manually inserted hexagons */}
            <Layout size={{ x: 9, y: 9 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
              <Hexagon q={0} r={0} s={0} fill = 'pat-logo'>
              </Hexagon>
              <Hexagon q={0} r={1} s={-1} fill = 'pat-2'>
                <Text>4</Text>
              </Hexagon>
              <Hexagon q={1} r={0} s={-1} fill = 'pat-3'>
                <Text>3</Text> 
              </Hexagon>
              <Hexagon q={1} r={-1} s={0} fill = 'pat-4'>
                <Text>4</Text>
                </Hexagon>
              <Hexagon q={0} r={-1} s={1} fill = 'pat-5'>
                <Text>6</Text>
                </Hexagon>
              <Hexagon q={-1} r={0} s={1} fill = 'pat-1'>
                <Text>11</Text>
                </Hexagon>
              <Hexagon q={-1} r={1} s={0} fill = 'pat-2'>
                <Text>3</Text>
                </Hexagon>
              <Hexagon q={-2} r={0} s={1} fill = 'pat-3'>
                <Text>9</Text>
                </Hexagon>
              <Hexagon q={0} r={2} s={-2} fill = 'pat-4'>
                <Text>11</Text>
                </Hexagon>
              <Hexagon q={1} r={1} s={-2} fill = 'pat-5'>
                <Text>5</Text>
                </Hexagon>
              <Hexagon q={2} r={0} s={-2} fill = 'pat-1'>
                <Text>8</Text>
                </Hexagon>
              <Hexagon q={2} r={-1} s={-1} fill = 'pat-2' >
                <Text>10</Text>
                </Hexagon>
              <Hexagon q={2} r={-2} s={0} fill = 'pat-3'>
                <Text>9</Text>
                </Hexagon>
              <Hexagon q={1} r={-2} s={1} fill = 'pat-4'>
                <Text>2</Text>
                </Hexagon>
              <Hexagon q={0} r={-2} s={2} fill = 'pat-5'>
                <Text>10</Text>
                </Hexagon>
              <Hexagon q={-1} r={-1} s={2} fill = 'pat-1'>
                <Text>12</Text>
                </Hexagon>
              <Hexagon q={-2} r={1} s={1} fill = 'pat-3'>
                <Text>8</Text>
                </Hexagon>
              <Hexagon q={-2} r={2} s={0} fill = 'pat-4'>
                <Text>5</Text>  
                </Hexagon>
              <Hexagon q={-1} r={2} s={-1} fill = 'pat-5'>
                <Text>6</Text>
                </Hexagon>
            </Layout>

            <Layout size={{ x: 3, y: 3 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
                {/* Escobas primera vuelta */}
                <Hexagon q={0} r={-1.5} s={1.5} fill = {fotoPos['foto_pos_5_10']} onClick={() => handleComprarEscoba('5_10', 0)}>
                </Hexagon>
                <Hexagon q={1.5} r={-1.5} s={1.5} fill = {fotoPos['foto_pos_8_10']} onClick={() => handleComprarEscoba('8_10', 1)}>
                </Hexagon>
                <Hexagon q={1.5} r={0} s={1.5} fill = {fotoPos['foto_pos_10_13']} onClick={() => handleComprarEscoba('10_13', 2)}>
                </Hexagon>
                <Hexagon q={0} r={1.5} s={-1.5} fill = {fotoPos['foto_pos_10_15']} onClick={() => handleComprarEscoba('10_15', 0)}>
                </Hexagon>
                <Hexagon q={-1.5} r={1.5} s={0} fill = {fotoPos['foto_pos_10_12']} onClick={() => handleComprarEscoba('10_12', 1)}>
                </Hexagon>
                <Hexagon q={-1.5} r={0} s={1.5} fill = {fotoPos['foto_pos_7_10']} onClick={() => handleComprarEscoba('7_10', 2)}>
                </Hexagon>
                {/* Escobas segunda vuelta */}
                <Hexagon q={1.5} r={-3} s={-2} fill = {fotoPos['foto_pos_5_8']} onClick={() => handleComprarEscoba('5_8', 2)}>
                </Hexagon>
                <Hexagon q={3} r={-1.5} s={-1} fill = {fotoPos['foto_pos_8_13']} onClick={() => handleComprarEscoba('8_13', 0)}>
                </Hexagon>
                <Hexagon q={3} r={1.5} s={-4.5} fill = {fotoPos['foto_pos_13_18']} onClick={() => handleComprarEscoba('13_18', 0)}>
                </Hexagon>
                <Hexagon q={1.5} r={3} s={-4.5} fill = {fotoPos['foto_pos_15_18']} onClick={() => handleComprarEscoba('15_18', 2)}>
                </Hexagon>
                <Hexagon q={-1.5} r={3} s={-1.5} fill = {fotoPos['foto_pos_12_15']} onClick={() => handleComprarEscoba('12_15', 2)}>
                </Hexagon>
                <Hexagon q={-3} r={1.5} s={-1.5} fill = {fotoPos['foto_pos_7_12']} onClick={() => handleComprarEscoba('7_12', 0)}>
                </Hexagon>
                <Hexagon q={-3} r={-1.5} s={0} fill = {fotoPos['foto_pos_2_7']} onClick={() => handleComprarEscoba('2_7', 0)}>
                </Hexagon>
                <Hexagon q={-1.5} r={-3} s={1.5} fill = {fotoPos['foto_pos_2_5']} onClick={() => handleComprarEscoba('2_5', 2)}>
                </Hexagon>
                {/* Escobas tercera vuelta */}
                <Hexagon q={3} r={-4.5} s={1.5} fill = {fotoPos['foto_pos_3_8']} onClick={() => handleComprarEscoba('3_8', 0)}>
                </Hexagon>
                <Hexagon q={4.5} r={-3} s={-1.5} fill = {fotoPos['foto_pos_8_11']} onClick={() => handleComprarEscoba('8_11', 2)}>
                </Hexagon>
                <Hexagon q={4.5} r={1.5} s={-6} fill = {fotoPos['foto_pos_16_18']} onClick={() => handleComprarEscoba('16_18', 1)}>
                </Hexagon>
                <Hexagon q={-1.5} r={6} s={-4.5} fill = {fotoPos['foto_pos_17_19']} onClick={() => handleComprarEscoba('17_19', 2)}>
                </Hexagon>
                <Hexagon q={-4.5} r={-1.5} s={6} fill = {fotoPos['foto_pos_2_4']} onClick={() => handleComprarEscoba('2_4', 1)}>
                </Hexagon>
                <Hexagon q={-6} r={1.5} s={4.5} fill = {fotoPos['foto_pos_4_9']} onClick={() => handleComprarEscoba('4_9', 0)}>
                </Hexagon>
                <Hexagon q={-1.5} r={4.5} s={-3} fill = {fotoPos['foto_pos_15_17']} onClick={() => handleComprarEscoba('15_17', 1)}>
                </Hexagon>
                <Hexagon q={-3} r={4.5} s={-1.5} fill = {fotoPos['foto_pos_12_17']} onClick={() => handleComprarEscoba('12_17', 0)}>
                </Hexagon>
                <Hexagon q={-4.5} r={3} s={1.5} fill = {fotoPos['foto_pos_9_12']} onClick={() => handleComprarEscoba('9_12', 2)}>
                </Hexagon>
                <Hexagon q={-1.5} r={-1.5} s={3} fill = {fotoPos['foto_pos_5_7']} onClick={() => handleComprarEscoba('5_7', 1)}>
                </Hexagon>
                <Hexagon q={-4.5} r={1.5} s={3} fill = {fotoPos['foto_pos_7_9']} onClick={() => handleComprarEscoba('7_9', 1)}>
                </Hexagon>
                <Hexagon q={1.5} r={-4.5} s={3} fill = {fotoPos['foto_pos_3_5']} onClick={() => handleComprarEscoba('3_5', 1)}>
                </Hexagon>
                <Hexagon q={0} r={-4.5} s={4.5} fill = {fotoPos['foto_pos_1_5']} onClick={() => handleComprarEscoba('1_5', 0)}>
                </Hexagon>
                <Hexagon q={4.5} r={-4.5} s={4.5} fill = {fotoPos['foto_pos_6_8']} onClick={() => handleComprarEscoba('6_8', 1)}>
                </Hexagon>
                <Hexagon q={4.5} r={0} s={4.5} fill = {fotoPos['foto_pos_13_16']} onClick={() => handleComprarEscoba('13_16', 2)}>
                </Hexagon>
                <Hexagon q={0} r={4.5} s={-4.5} fill = {fotoPos['foto_pos_15_19']} onClick={() => handleComprarEscoba('15_19', 0)}>
                </Hexagon>
                <Hexagon q={-4.5} r={4.5} s={0} fill = {fotoPos['foto_pos_12_14']} onClick={() => handleComprarEscoba('12_14', 1)}>
                </Hexagon>
                <Hexagon q={-4.5} r={0} s={4.5} fill = {fotoPos['foto_pos_4_7']} onClick={() => handleComprarEscoba('4_7', 2)}>
                </Hexagon>
                <Hexagon q={4.5} r={-1.5} s={4.5} fill = {fotoPos['foto_pos_11_13']} onClick={() => handleComprarEscoba('11_13', 1)}>
                </Hexagon>
                <Hexagon q={-1.5} r={-4.5} s={6} fill = {fotoPos['foto_pos_1_2']} onClick={() => handleComprarEscoba('1_2', 1)}>
                </Hexagon>
                <Hexagon q={-6} r={4.5} s={4.5} fill = {fotoPos['foto_pos_9_14']} onClick={() => handleComprarEscoba('9_14', 0)}>
                </Hexagon>
                <Hexagon q={-4.5} r={6} s={4.5} fill = {fotoPos['foto_pos_14_17']} onClick={() => handleComprarEscoba('14_17', 2)}>
                </Hexagon>
                <Hexagon q={1.5} r={4.5} s={-4.5} fill = {fotoPos['foto_pos_18_19']} onClick={() => handleComprarEscoba('18_19', 1)}>
                </Hexagon>
                <Hexagon q={6} r={-1.5} s={4.5} fill = {fotoPos['foto_pos_11_16']} onClick={() => handleComprarEscoba('11_16', 0)}>
                </Hexagon>
                <Hexagon q={6} r={-4.5} s={4.5} fill = {fotoPos['foto_pos_6_11']} onClick={() => handleComprarEscoba('6_11', 0)}>
                </Hexagon>
                <Hexagon q={4.5} r={-6} s={4.5} fill = {fotoPos['foto_pos_3_6']} onClick={() => handleComprarEscoba('3_6', 2)}>
                </Hexagon>
                <Hexagon q={1.5} r={-6} s={4.5} fill = {fotoPos['foto_pos_1_3']} onClick={() => handleComprarEscoba('1_3', 2)}>
                </Hexagon>
                <Hexagon q={1.5} r={1.5} s={0} fill = {fotoPos['foto_pos_13_15']} onClick={() => handleComprarEscoba('13_15', 1)}>
                </Hexagon>


                
                {/* Hexagonos cabanas y castillos */}
                {/* Segunda vuelta */}
                <Hexagon q={1} r={-2} s={1} id='5_8_10' fill = {fotoPos['foto_pos_5_8_10']} onClick={() => handleComprar('5_8_10')}>
                </Hexagon>
                <Hexagon q={2} r={-1} s={-1} id='8_10_13' fill = {fotoPos['foto_pos_8_10_13']} onClick={() => handleComprar('8_10_13')}>
                </Hexagon>
                <Hexagon q={1} r={1} s={-2} id='10_13_15' fill = {fotoPos['foto_pos_10_13_15']} onClick={() => handleComprar('10_13_15')}>
                </Hexagon>
                <Hexagon q={-1} r={2} s={-1} id='10_12_15' fill = {fotoPos['foto_pos_10_12_15']}  onClick={() => handleComprar('10_12_15')}>
                </Hexagon>
                <Hexagon q={-2} r={1} s={1} id='7_10_12' fill = {fotoPos['foto_pos_7_10_12']}  onClick={() => handleComprar('7_10_12')}>
                </Hexagon>
                <Hexagon q={-1} r={-1} s={2} id='5_7_10' fill = {fotoPos['foto_pos_5_7_10']}  onClick={() => handleComprar('5_7_10')}>
                </Hexagon>
                {/* Tercera vuelta */}
                {/* Cuarta vuelta */}
                <Hexagon q={2} r={-4} s={2} id='3_5_8' fill = {fotoPos['foto_pos_3_5_8']}  onClick={() => handleComprar('3_5_8')}>
                </Hexagon>
                <Hexagon q={4} r={-2} s={-2} id='8_11_13' fill = {fotoPos['foto_pos_8_11_13']}  onClick={() => handleComprar('8_11_13')}>
                </Hexagon>
                <Hexagon q={2} r={2} s={-4} id='13_15_18' fill = {fotoPos['foto_pos_13_15_18']}  onClick={() => handleComprar('13_15_18')}>
                </Hexagon>
                <Hexagon q={-2} r={4} s={-2} id='12_15_17' fill = {fotoPos['foto_pos_12_15_17']}  onClick={() => handleComprar('12_15_17')}>
                </Hexagon>
                <Hexagon q={-4} r={2} s={2} id='7_9_12' fill = {fotoPos['foto_pos_7_9_12']}  onClick={() => handleComprar('7_9_12')}>
                </Hexagon>
                <Hexagon q={-2} r={-2} s={4} id='2_5_7' fill = {fotoPos['foto_pos_2_5_7']}  onClick={() => handleComprar('2_5_7')}>
                </Hexagon>
                {/* Quinta vuelta */}
                <Hexagon q={1} r={-5} s={4} id='1_3_5' fill = {fotoPos['foto_pos_1_3_5']}  onClick={() => handleComprar('1_3_5')}>
                </Hexagon>
                <Hexagon q={4} r={-5} s={1} id='3_6_8' fill = {fotoPos['foto_pos_3_6_8']}  onClick={() => handleComprar('3_6_8')}>
                </Hexagon>
                <Hexagon q={5} r={-4} s={-1} id='6_8_11' fill = {fotoPos['foto_pos_6_8_11']}  onClick={() => handleComprar('6_8_11')}>
                </Hexagon>
                <Hexagon q={5} r={-1} s={-4} id='11_13_16' fill = {fotoPos['foto_pos_11_13_16']}  onClick={() => handleComprar('11_13_16')}>
                </Hexagon>
                <Hexagon q={4} r={1} s={-5} id='13_16_18' fill = {fotoPos['foto_pos_13_16_18']}  onClick={() => handleComprar('13_16_18')}>
                </Hexagon>
                <Hexagon q={1} r={4} s={-5} id='15_18_19' fill = {fotoPos['foto_pos_15_18_19']}  onClick={() => handleComprar('15_18_19')}>
                </Hexagon>
                <Hexagon q={-1} r={5} s={-4} id='15_17_19' fill = {fotoPos['foto_pos_15_17_19']} onClick={() => handleComprar('15_17_19')}>
                </Hexagon>
                <Hexagon q={-4} r={5} s={-1} id='12_14_17' fill = {fotoPos['foto_pos_12_14_17']}  onClick={() => handleComprar('12_14_17')}>
                </Hexagon>
                <Hexagon q={-5} r={4} s={1} id='9_12_14' fill = {fotoPos['foto_pos_9_12_14']}  onClick={() => handleComprar('9_12_14')}>
                </Hexagon>
                <Hexagon q={-5} r={1} s={4} id='4_7_9' fill = {fotoPos['foto_pos_4_7_9']}  onClick={() => handleComprar('4_7_9')}>
                </Hexagon>
                <Hexagon q={-4} r={-1} s={5} id='2_4_7' fill = {fotoPos['foto_pos_2_4_7']}  onClick={() => handleComprar('2_4_7')}>
                </Hexagon>
                <Hexagon q={-1} r={-4} s={5} id='1_2_5' fill = {fotoPos['foto_pos_1_2_5']}  onClick={() => handleComprar('1_2_5')}>
                </Hexagon>
                {/* Sexta vuelta */}
                
                

              
            </Layout>

            {/* Patterns de terreno */}
            <Pattern id="pat-1" link={Image1} size={hexagonSize}/>
            <Pattern id="pat-2" link={Image2} size={hexagonSize}/>
            <Pattern id="pat-3" link={Image3} size={hexagonSize3}/>
            <Pattern id="pat-4" link={Image4} size={hexagonSize}/>
            <Pattern id="pat-5" link={Image5} size={hexagonSize}/>
            <Pattern id="pat-logo" link={Image7} size={{x:9.0, y:8.0}}/>

            {/* Patterns de cabanas */}
            <Pattern id="pat-cabana-roja" link={CabanaRoja} size={{x:3.0, y:1.8}}/>
            <Pattern id="pat-cabana-verde" link={CabanaVerde} size={{x:1.8, y:1.8}}/>
            <Pattern id="pat-cabana-azul" link={CabanaAzul} size={{x:3.0, y:1.8}}/>
            <Pattern id="pat-cabana-amarilla" link={CabanaAmarilla} size={{x:1.8, y:1.8}}/>

            {/* Patterns de castillos */}
            <Pattern id="pat-castillo-rojo" link={CastilloRojo} size={{x:3.0, y:1.8}}/>
            <Pattern id="pat-castillo-verde" link={CastilloVerde} size={{x:1.8, y:1.8}}/>
            <Pattern id="pat-castillo-azul" link={CastilloAzul} size={{x:3.0, y:1.8}}/>
            <Pattern id="pat-castillo-amarillo" link={CastilloAmarillo} size={{x:1.8, y:1.8}}/>
            
            {/* Patterns de escobas */}
            <Pattern id="pat-escoba-roja-recto" link={EscobaRojaRecto} size={{x:3.5, y:2.5}}/>
            <Pattern id="pat-escoba-roja-derecha" link={EscobaRojaDerecha} size={{x:3.5, y:4}}/>
            <Pattern id="pat-escoba-roja-izquierda" link={EscobaRojaIzquierda} size={{x:4, y:3.5}}/>
            <Pattern id="pat-escoba-azul-recto" link={EscobaAzulRecto} size={{x:3.5, y:2.5}}/>
            <Pattern id="pat-escoba-azul-derecha" link={EscobaAzulDerecha} size={{x:3.5, y:4}}/>
            <Pattern id="pat-escoba-azul-izquierda" link={EscobaAzulIzquierda} size={{x:4, y:3.5}}/>
            <Pattern id="pat-escoba-verde-recto" link={EscobaVerdeRecto} size={{x:3.5, y:2.5}}/>
            <Pattern id="pat-escoba-verde-derecha" link={EscobaVerdeDerecha} size={{x:3.5, y:4}}/>
            <Pattern id="pat-escoba-verde-izquierda" link={EscobaVerdeIzquierda} size={{x:4, y:3.5}}/>
            <Pattern id="pat-escoba-amarilla-recto" link={EscobaAmarillaRecto} size={{x:3.5, y:2.5}}/>
            <Pattern id="pat-escoba-amarilla-derecha" link={EscobaAmarillaDerecha} size={{x:3.5, y:4}}/>
            <Pattern id="pat-escoba-amarilla-izquierda" link={EscobaAmarillaIzquierda} size={{x:4, y:3.5}}/>
          </HexGrid>
          
        </div>

        <div className='div-derecho-partida'>
          <div className='div-boton-dado'>
            <button className="button-partida" id="button-lanzar" onClick={handleBotonLanzarDado}>Lanzar Dados</button>
            <br></br>
            {resultadoDado && (<p>Resultado dados: {resultadoDado}</p>)}
            <br></br>
          </div>
          <div className="div-botones">
            <button className="button-partida" id="button-escoba" onClick={handleBotonComprarEscoba}>Comprar Escoba</button>
            <br></br>
            <button className="button-partida" id="button-cabana" onClick={handleBotonComprarCabana}>Comprar Cabana</button>
            <br></br>
            <button className="button-partida" id="button-castillo" onClick={handleBotonComprarCastillo}>Comprar Castillo</button>
            <br></br>
          </div>
          <div>
            <button className="button-partida" id="button-finalizar" onClick={handleBotonFinalizarTurno}>Finalizar Turno</button>
          </div>
          <div className="div-cuadro-respuestas">
            <p> {mensaje} </p>
          </div>
        </div>
      
      </div>
      <div className="cartas">
            <div className="div-cartas">
              <img className='carta-dragon' src={CartaDragon}></img>
              <p>Número: {cartasDragon}</p>
            </div>
            <div className="div-cartas">
              <img className='carta-phoenix' src={CartaPhoenix}></img>
              <p>Número: {cartasPhoenix}</p>
            </div>
            <div className="div-cartas">
              <img className='carta-unicornio' src={CartaUnicornio}></img>
              <p>Número: {cartasUnicornio}</p>
            </div>
            <div className="div-cartas">
              <img className='carta-varita' src={CartaVarita}></img>
              <p>Número: {cartasVarita}</p>
            </div>
            <div className="div-cartas">
              <img className='carta-serpiente' src={CartaSerpiente}></img>
              <p>Número: {cartasSerpiente}</p>
            </div>
          </div>
      </div>
      </main>
    );

    // Obtén una referencia al elemento
    var hexagonElement = document.getElementById('hexagon_125');

    // Oculta el hexágono
    hexagonElement.style.display = 'none';
}

export default Partida;


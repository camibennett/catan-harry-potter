
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';
import ImageCabanaRoja from '../../assets/img/cabana-roja.png'
import ImageEscobaRoja from '../../assets/img/escoba-instrucciones.png'


function Instruction2() {
  const [isVisibleInst, setIsVisibleInst] = useState(true);
  const [isVisibleBoard, setIsVisibleBoard] = useState(false);

  function handleClick() {
    setIsVisibleInst(false);
    setIsVisibleBoard(true);
  }

  return (
    <main className="content-instruction">
        
        

        <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
              <div className='div-board'>
                <div className='div-cabana-roja-tablero'>
                  {isVisibleBoard && <img src={ImageCabanaRoja} className='cabana-roja-tablero' alt="Imagen" />}
                </div>
                <div className='div-escoba-roja-tablero'>
                  {isVisibleBoard && <img src={ImageEscobaRoja} className='escoba-roja-tablero' alt="Imagen" />}
                </div>
                <Board />
              </div>
              
                
            </div>
            <div className="div-instrucciones-text">
              <p className="parrafo-instrucciones">Empiezas sin cabañas, escobas ni castillos. La idea del juego es ir colocando
              cabañas, escobas y catillos para ir ganando snitches doradas. Para ver como se posicionan las cabañas y escobas presiona el botón.</p>
              <br></br>
              <p className="parrafo-instrucciones"> ¿Quieres ver cómo se ve el inicio de la partida? ¡Apreta el botón! </p>
              <br></br>
              <div className='imgs-instrucciones'>
                <div className='img-instrucciones'>
                  {isVisibleInst && <img src={ImageCabanaRoja} className='cabana-roja-instrucciones' alt="Imagen" />}
                </div>
                <div className='img-instrucciones'>
                  {isVisibleInst && <img src={ImageEscobaRoja} className='escoba-roja-instrucciones' alt="Imagen" />}
                </div>
                
                
              </div>
              <br></br>
              {isVisibleInst && 
              (<button id="boton-click" className="back-button" onClick={handleClick}>Haz clic aquí</button>) }
              
              
            </div>
        </div>
        <div className="div-botones">
        <div className="div-boton">
        <Link className="back-button" to='/instruction1'>
            Back
        </Link>
        </div>
        <div className="div-boton">
        <Link className="next-button" to='/instruction3'>
            Next
        </Link>
        </div>
        </div>
    </main>
  )
}




export default Instruction2;
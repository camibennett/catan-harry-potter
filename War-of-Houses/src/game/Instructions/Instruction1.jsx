import React from "react";
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';

function Instruction1() {
  return (
    <main className="content-instruction">
        <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
                <Board />
            </div>
            <div className="div-instrucciones-text">
                <p className="parrafo-instrucciones">Frente a ti se encuentra el mágico mundo de War of Houses, el cual se compone de 19 hexágonos de terreno. 
                Tu objetivo es colonizar el mundo, mediante la construcción de cabañas, castillos y escobas.</p>
                <br></br>
                <p className="parrafo-instrucciones">En War of Houses hay 5 tipos diferentes de terreno, donde cada uno produce una materia prima diferente:</p>
                <br></br>
                <ul>
                    <li>El bosque prohibido produce pelo de unicornio.</li>
                    <li>La cámara de los secretos produce dientes de serpiente.</li>
                    <li>La casa de Hagrid produce huevos de dragón.</li>
                    <li>Diagonal Alley produce varitas mágicas.</li>
                    <li>La oficina de Dumbledore produce plumas de Phoenix.</li>
                </ul>
            </div>
        </div>
        <div className="div-botones">
            <Link className="next-button" to='/instruction2'>
                Next
            </Link>
        </div>
    </main>
  )
}

export default Instruction1;
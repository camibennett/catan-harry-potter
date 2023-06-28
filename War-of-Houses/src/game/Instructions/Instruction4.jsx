
import ImageCabanaRoja from '../../assets/img/cabana-roja-grande.png';
import ImageEscobaRoja from '../../assets/img/escoba-de-bruja-grande.png'
import ImageCastilloRojo from '../../assets/img/castillo-rojo-grande.png'
import { Link } from "react-router-dom";
import './instructions.css';
import ImageCartaDragon from '../../assets/img/huevo-dragon.jpg';
import ImageCartaPhoenix from '../../assets/img/pluma-pheonix.jpg';
import ImageCartaUnicornio from '../../assets/img/pelo-unicornio.jpg';
import ImageCartaVarita from '../../assets/img/varita-magica.jpg';
import ImageCartaSerpiente from '../../assets/img/diente-serpiente.jpg';


function Instruction4() {
  return (
    <main className="content-instruction">
        <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
        <p className="parrafo-instrucciones" id="text-instruction-4"> Para poder construir nuevas escobas, cabañas y castillos se deben juntar diferentes cantidades de las cartas de materias primas descritas
            anteriormente. Las combinaciones para crear cada uno de estos elementos son las siguientes:
        </p>
            <div className="div-cartas-escoba">
                <div className='pieza'>
                <img src={ImageEscobaRoja} className='escoba-roja' alt="Imagen" id='escoba-roja-cartas' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaUnicornio} className='carta-unicornio' alt="Imagen" id='carta-unicornio-1' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaPhoenix} className='carta-phoenix' alt="Imagen" id='carta-phoenix-1' />
                </div>
            </div>


            <div className="div-cartas-escoba">
                <div className='pieza'>
                <img src={ImageCabanaRoja} className='cabana-roja' alt="Imagen" id='cabana-roja-cartas' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaUnicornio} className='carta-unicornio' alt="Imagen" id='carta-unicornio-22' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaPhoenix} className='carta-phoenix' alt="Imagen" id='carta-phoenix-2' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaVarita} className='carta-varita' alt="Imagen" id='carta-varita-1' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaSerpiente} className='carta-serpiente' alt="Imagen" id='carta-serpiente-1' />
                </div>
            </div>


            <div className="div-cartas-castillo">
                <div className='pieza'>
                <img src={ImageCastilloRojo} className='castillo-rojo' alt="Imagen" id='castillo-rojo-cartas' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaDragon} className='carta-dragon' alt="Imagen" id='carta-dragon-1' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaDragon} className='carta-dragon' alt="Imagen" id='carta-dragon-2' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaDragon} className='carta-dragon' alt="Imagen" id='carta-dragon-3' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaVarita} className='carta-varita' alt="Imagen" id='carta-varita-2' />
                </div>
                <div className='carta'>
                    <img src={ImageCartaVarita} className='carta-varita' alt="Imagen" id='carta-varita-3' />
                </div>
            </div>


      <div className="div-botones">
        <div className="div-boton">
          <Link className="back-button" to='/instruction3'>
            Back
            </Link>
          </div>
          <div className="div-boton">
            <Link className="next-button" to='/instruction5'>
              Next
            </Link>
          </div>
        </div>
    </main>
  )
}

export default Instruction4;

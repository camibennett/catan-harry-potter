import React from "react";
import './about-us.css'
import FotoAnge from '../../assets/img/foto_ange.jpg'
import FotoCami from '../../assets/img/foto_cami.jpg'

function AboutUs() {
  return (
    <main className="content-about-us">
      <div className="bg-container-about-us"></div>

      <div className='equipo'>
        <div className='persona'>
          <img className='foto-persona' src={FotoAnge}></img>
          <hr class="line"></hr>
          <h2 id='nombre'>María Angélica Gazitúa</h2>
          <br></br>
          <p>Estudiante de Ingeniería Civil</p>
          <p>Major: Ingeniería de Software</p>
          <p>Minor: Ingeniería Industrial</p>
          <p>Dato curioso: Fanática de Harry Potter</p>
          <br></br>
          <p>Contacto: ange.gazitua@uc.cl</p>
        </div>

        <div className='persona'>
          <img className='foto-persona' src={FotoCami}></img>
          <hr class="line"></hr>
          <h2 id='nombre'>Camila Bennett</h2>
          <br></br>
          <p>Estudiante de Ingeniería Civil</p>
          <p>Major: Ingeniería de Software</p>
          <p>Minor: Ingeniería Industrial</p>
          <p>Dato curioso: Fanática de Catan</p>
          <br></br>
          <p>Contacto: camila.bennett@uc.cl</p>
        </div>
      </div>

    </main>
  )
}

export default AboutUs;
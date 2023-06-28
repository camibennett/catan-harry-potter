import axios from 'axios';
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme

import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import './board.css'
import Image1 from '../assets/img/bosque_prohibido.jpg'
import Image2 from '../assets/img/cabaña_hagrid.jpg'
import Image3 from '../assets/img/chamber.png'
import Image4 from '../assets/img/diagonal_alley.jpg'
import Image5 from '../assets/img/oficina_dumbledore.jpg'
import Image6 from '../assets/img/cabana-roja.png'
import Image7 from '../assets/img/logo_howards.png'

function Board () {
    const hexagonSize = { x: 18, y: 10 };
    const hexagonSize3 = { x: 10, y: 10 };
    return (
      <div id="board">
        {/* <img src={Image6} id='cabana'></img> */}
        <HexGrid width={1550} height={600} viewBox="-50 -50 100 100">  {/* aca se cambia el tamaño del board */}
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} fill = 'pat-logo'/>
            {/* Using pattern (defined below) to fill the hexagon */}
            <Hexagon q={0} r={1} s={-1} fill = 'pat-2'> 
              <Text>10</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1} fill = 'pat-3'>
              <Text>8</Text> 
            </Hexagon>
            <Hexagon q={1} r={-1} s={0} fill = 'pat-4'>
              <Text>4</Text>
              </Hexagon>
            <Hexagon q={0} r={-1} s={1} fill = 'pat-5'>
              <Text>5</Text>
              </Hexagon>
            <Hexagon q={-1} r={0} s={1} fill = 'pat-1'>
              <Text>6</Text>
              </Hexagon>
            <Hexagon q={-1} r={1} s={0} fill = 'pat-2'>
              <Text>9</Text>
              </Hexagon>
            

            <Hexagon q={-2} r={0} s={1} fill = 'pat-3'>
              <Text>2</Text>
              </Hexagon>
            <Hexagon q={0} r={2} s={-2} fill = 'pat-4'>
              <Text>6</Text>
              </Hexagon>
            <Hexagon q={1} r={1} s={-2} fill = 'pat-5'>
              <Text>9</Text>
              </Hexagon>
            <Hexagon q={2} r={0} s={-2} fill = 'pat-1'>
              <Text>5</Text>
              </Hexagon>
            <Hexagon q={2} r={-1} s={-1} fill = 'pat-2' >
              <Text>10</Text>
              </Hexagon>
            <Hexagon q={2} r={-2} s={0} fill = 'pat-3'>
              <Text>8</Text>
              </Hexagon>
            <Hexagon q={1} r={-2} s={1} fill = 'pat-4'>
              <Text>12</Text>
              </Hexagon>
            <Hexagon q={0} r={-2} s={2} fill = 'pat-5'>
              <Text>11</Text>
              </Hexagon>
            <Hexagon q={-1} r={-1} s={2} fill = 'pat-1'>
              <Text>3</Text>
              </Hexagon>
            <Hexagon q={-2} r={1} s={1} fill = 'pat-3'>
              <Text>3</Text>
              </Hexagon>
            <Hexagon q={-2} r={2} s={0} fill = 'pat-4'>
              <Text>4</Text>  
              </Hexagon>
            <Hexagon q={-1} r={2} s={-1} fill = 'pat-5'>
              <Text>11</Text>
              </Hexagon>


          </Layout>

          <Pattern id="pat-1" link={Image1} size={hexagonSize}/>
          <Pattern id="pat-2" link={Image2} size={hexagonSize}/>
          <Pattern id="pat-3" link={Image3} size={hexagonSize3}/>
          <Pattern id="pat-4" link={Image4} size={hexagonSize}/>
          <Pattern id="pat-5" link={Image5} size={hexagonSize}/>
          <Pattern id="pat-cabaña" link={Image6}/>
          <Pattern id="pat-logo" link={Image7}/>

        </HexGrid>
      </div>
    );
}

export default Board;


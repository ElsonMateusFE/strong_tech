import computador from '../../assets/images/003-computer 1.png'
import cpu from '../../assets/images/002-growth-graph 1.png'
import gamer from '../../assets/images/001-playing-videogames 1.png'
import allInOne from '../../assets/images/004-tela-de-computador 1.png'
import nuc from '../../assets/images/mini 1.png'
import notebook from '../../assets/images/mini 2.png'
import monitor from '../../assets/images/mini 3.png'
import perifericos from '../../assets/images/mini 4.png'

import {
  AllInOne,
  Computadores,
  Cpu,
  Gamer,
  Monitores,
  OpcoesIcones,
  Pc,
  Perifericos
} from './styles'

const Icones = () => (
  <OpcoesIcones>
    <li>
      <img src={computador} alt="" />
      <Computadores>
        <p>Computadores</p>
      </Computadores>
    </li>
    <li>
      <img src={cpu} alt="" />
      <Cpu>
        <p>CPU</p>
      </Cpu>
    </li>
    <li>
      <img src={gamer} alt="" />
      <Gamer>
        <p>Gamer</p>
      </Gamer>
    </li>
    <li>
      <img src={allInOne} alt="" />
      <AllInOne>
        <p>All-in-One</p>
      </AllInOne>
    </li>
    <li>
      <img src={nuc} alt="" />
      <Pc>
        <p>Mini PC Nuc</p>
      </Pc>
    </li>
    <li>
      <img src={notebook} alt="" />
      <p>Notebook</p>
    </li>
    <li>
      <img src={monitor} alt="" />
      <Monitores>
        <p>Monitores</p>
      </Monitores>
    </li>
    <li>
      <img src={perifericos} alt="" />
      <Perifericos>
        <p>Perifericos</p>
      </Perifericos>
    </li>
  </OpcoesIcones>
)

export default Icones

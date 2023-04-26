import computador from '../../assets/images/banner topo teste 2 JPG 1.png'
import { Botao } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import TituloTag from '../../components/TituloTag'
import { Bloco } from './styles'

const BlocoNove = () => (
  <Bloco>
    <img src={computador} alt="" />
    <div className="container">
      <main>
        <TituloTag corDeTitulo>All in One</TituloTag>
        <Titulo fontSize={30}>
          A combinação perfeita de estética e velocidade
        </Titulo>
        <Paragrafo corParagrafo>
          Os computadores All in One da Strong Tech são a escolha ideal para
          quem busca um produto que alie beleza e desempenho em um único
          dispositivo. Com um design moderno e sofisticado, eles são capazes de
          agregar valor à decoração e ao ambiente, além de proporcionar um
          desempenho superior.
        </Paragrafo>
        <Botao>Saiba Mais</Botao>
      </main>
    </div>
  </Bloco>
)

export default BlocoNove

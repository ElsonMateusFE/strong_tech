import { Botao } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import computadores from '../../assets/images/banner all in one 1.png'
import Titulo from '../../components/Titulo'
import { Bloco } from './styles'
import TituloTag from '../../components/TituloTag'

const BlocoTres = () => (
  <Bloco>
    <div className="container">
      <img src={computadores} alt="" />
      <main>
        <TituloTag corDeTitulo>All In One</TituloTag>
        <Titulo>Tecnologia e Design</Titulo>
        <Paragrafo corParagrafo>
          Os All in One Strong Tech são a escolha perfeita para quem busca a
          combinação perfeita entre tecnologia e design. Com processadores
          potentes, telas de alta definição e um design elegante, nossos All in
          One oferecem uma experiência de uso única e completa. Descubra agora
          mesmo todas as vantagens de ter um All in One Strong Tech em sua casa
          ou escritório.
        </Paragrafo>
        <Botao>Saiba Mais</Botao>
      </main>
    </div>
  </Bloco>
)

export default BlocoTres

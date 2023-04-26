import { Paragrafo } from '../../components/Paragrafo'
import * as S from './styles'
import completo from '../../assets/images/4 - Completo.png'
import teclado from '../../assets/images/black-wireless-keyboard-white-surface 1.png'
import Titulo from '../../components/Titulo'

const BlocoOnce = () => (
  <div className="container">
    <S.Bloco>
      <div>
        <Titulo corDeTitulo fontSize={25} fontWeight>
          Monitor
        </Titulo>
        <Titulo fontSize={25}>Monitores de auta Definição</Titulo>
        <Paragrafo corParagrafo>
          Conheça nossos Monitores com mais demanda de procura,
        </Paragrafo>
        <a href="#">Ofertas de Notebooks</a>
        <br />
        <img src={completo} alt="" />
      </div>
      <S.LinhaVertical />
      <S.ImagemTeclado>
        <Titulo corDeTitulo fontSize={25} fontWeight>
          Periféricos
        </Titulo>
        <Titulo fontSize={25}>Nossos Perifericos</Titulo>
        <Paragrafo corParagrafo>
          Conheça agora os perifericos mais procurados pelos usuários e tenha a
          melhor experiência em tecnologia!
        </Paragrafo>
        <a href="#">Ofertas de Computadores completos</a>
        <img src={teclado} alt="" />
      </S.ImagemTeclado>
    </S.Bloco>
  </div>
)

export default BlocoOnce

import { Botao } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Bloco } from './styles'
import computador from '../../assets/images/teste-topo-2 1.png'

const BlocoUm = () => (
  <Bloco>
    <div className="container">
      <img src={computador} alt="" />
      <main>
        <Titulo fontWeight fontSize={25}>
          DOMINANDO O MUNDO DA TECNOLOGIA
        </Titulo>
        <Titulo>Design e Desempenho Superiores.</Titulo>
        <Paragrafo corParagrafo>
          Os produtos Strong Tech foram desenvolvidos com um design inovador e
          pensados para oferecer o máximo desempenho em todas as suas
          atividades. Com tecnologia de ponta e alta qualidade, nossos
          computadores e produtos são ideais para quem busca a excelência em
          performance. Descubra agora mesmo a experiência Strong Tech.
        </Paragrafo>
        <Botao>Saiba Mais</Botao>
      </main>
    </div>
  </Bloco>
)

export default BlocoUm

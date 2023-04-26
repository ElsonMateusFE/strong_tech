import { Botao } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import group from '../../assets/images/Group 53.png'
import { Bloco } from './styles'
import Titulo from '../../components/Titulo'

const BlocoCinco = () => (
  <Bloco>
    <div className="container">
      <img src={group} alt="" />
      <main>
        <Titulo fontWeight fontSize={25} corDeTitulo>
          Linha Gamer
        </Titulo>
        <Titulo>Eleve Seus Jogos</Titulo>
        <Paragrafo corParagrafo>
          A linha Gamer Strong Tech foi desenvolvida especialmente para os
          jogadores mais exigentes, que buscam o máximo de desempenho e
          qualidade em seus jogos. Nossos computadores e periféricos foram
          projetados para garantir uma experiência de jogo imersiva e fluida,
          com processadores avançados, placas de vídeo potentes e design
          arrojado. Se você é um gamer de verdade, conheça agora mesmo a linha
          Gamer Strong Tech.
        </Paragrafo>
        <Botao>Saiba Mais</Botao>
      </main>
    </div>
  </Bloco>
)

export default BlocoCinco

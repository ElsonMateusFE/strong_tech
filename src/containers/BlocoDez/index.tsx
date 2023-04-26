import * as S from './styles'
import { TituloEspecial } from '../../styles'
import { Paragrafo } from '../../components/Paragrafo'
import { Botao, BotaoSecundario } from '../../components/Botao'
import nuc from '../../assets/images/Group 54.png'
import Titulo from '../../components/Titulo'
import TituloTag from '../../components/TituloTag'

const BlocoSete = () => (
  <S.Bloco>
    <div className="container">
      <TituloEspecial>
        Vantagens <strong>Strong Tech</strong>
      </TituloEspecial>
      <Paragrafo corParagrafo textAlign>
        Com uma equipe altamente capacitada, oferece soluções personalizadas e
        de alta qualidade para empresas de diversos setores.
      </Paragrafo>
      <a href="#">Conhecer nossos Produtos</a>
      <S.Container>
        <img src={nuc} alt="" />
        <div>
          <TituloTag corDeTitulo>Mini PC NUC</TituloTag>
          <Titulo fontSize={30}>Dê um Upgrade no Seu Espaço</Titulo>
          <Paragrafo corParagrafo>
            A linha de Mini PC Nuc da Strong Tech é a escolha ideal para quem
            busca performance em um formato compacto e discreto. Com
            processadores avançados e configurações personalizáveis, nossos Mini
            PCs Nuc são ideais para uso doméstico, corporativo e até mesmo para
            jogos. Descubra agora mesmo a praticidade e desempenho da linha Mini
            PC Nuc Strong Tech.
          </Paragrafo>
          <ul>
            <li>
              <Botao>Saiba Mais</Botao>
            </li>
            <li>
              <BotaoSecundario>Ver a Loja</BotaoSecundario>
            </li>
          </ul>
        </div>
      </S.Container>
    </div>
  </S.Bloco>
)

export default BlocoSete

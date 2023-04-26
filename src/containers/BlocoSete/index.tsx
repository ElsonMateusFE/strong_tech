import * as S from './styles'
import { TituloEspecial } from '../../styles'
import { Paragrafo } from '../../components/Paragrafo'
import { Botao } from '../../components/Botao'
import notebook from '../../assets/images/Group 115.png'
import Titulo from '../../components/Titulo'

const BlocoSete = () => (
  <S.Bloco>
    <TituloEspecial>
      Produtos <strong>Strong Tech</strong>
    </TituloEspecial>
    <Paragrafo corParagrafo textAlign>
      Fabricações e distribuição de nossos produtos com alta tecnologia e
      inovação no mercado com máxima segurança.
    </Paragrafo>
    <main>
      <ul>
        <li>
          <a href="#">Sobre os processos de fabricação</a>
        </li>
        <li>
          <a href="#">Sobre os processos de distribuição</a>
        </li>
      </ul>
    </main>
    <div className="container">
      <S.Container>
        <img src={notebook} alt="" />
        <div>
          <Titulo corDeTitulo fontWeight fontSize={25}>
            Notebook
          </Titulo>
          <Titulo fontSize={30}>Confira nossos Notebooks Strong Tech</Titulo>
          <Paragrafo corParagrafo>
            Tecnologia de ponta para atender suas necessidades diárias, desde o
            trabalho até o lazer. Com alta performance e design elegante, nossos
            notebooks são ideais para quem busca qualidade e praticidade.
          </Paragrafo>
          <Botao>Saiba Mais</Botao>
        </div>
      </S.Container>
    </div>
  </S.Bloco>
)

export default BlocoSete

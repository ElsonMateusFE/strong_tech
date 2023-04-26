import { Botao, BotaoSecundario } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import completo from '../../assets/images/4 - Completo-2.png'
import Titulo from '../../components/Titulo'
import { Bloco } from './styles'

const BlocoQuatro = () => (
  <Bloco>
    <div className="container">
      <img src={completo} alt="" />
      <main>
        <Titulo fontSize={25} corDeTitulo fontWeight>
          Linha Desktop
        </Titulo>
        <Titulo>Desempenho e Versatilidade</Titulo>
        <Paragrafo corParagrafo>
          A linha Desktop Strong Tech foi desenvolvida para atender às mais
          variadas necessidades em termos de performance e qualidade. Com
          processadores de alta performance, memória RAM de última geração e uma
          grande variedade de configurações, nossos Desktops são a escolha certa
          para quem busca uma solução completa.
        </Paragrafo>
        <ul>
          <li>
            <Botao>Saiba Mais</Botao>
          </li>
          <li>
            <BotaoSecundario>Ver a Loja</BotaoSecundario>
          </li>
        </ul>
      </main>
    </div>
  </Bloco>
)

export default BlocoQuatro

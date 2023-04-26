import { Botao, BotaoSecundario } from '../../components/Botao'
import { Paragrafo } from '../../components/Paragrafo'
import computador from '../../assets/images/Group 66.png'
import Titulo from '../../components/Titulo'
import { Bloco, Container } from './styles'

const BlocoOito = () => (
  <Bloco>
    <div className="container">
      <Container>
        <img src={computador} alt="" />
        <div>
          <Titulo fontSize={25} corDeTitulo fontWeight>
            Linha Corporativa
          </Titulo>
          <Titulo>Sua Empresa nunca mais sera a mesma</Titulo>
          <Paragrafo corParagrafo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec justo quis leo malesuada volutpat id eget lacus. Cras rhoncus
            sem ante. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Vivamus dignissim rutrum tincidunt.
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
      </Container>
    </div>
  </Bloco>
)

export default BlocoOito

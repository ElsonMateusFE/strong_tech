import { Container, Content, Opcao, Redes } from './styles'
import { FaTimes } from 'react-icons/fa'
import facebook from '../../assets/images/face.png'
import instagram from '../../assets/images/Vector (1).png'
import whatsapp from '../../assets/images/Vector (2).png'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Opcao>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Onde Encontrar</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </Opcao>
        <Redes>
          <ul>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={whatsapp} alt="Whatsapp" />
          </ul>
        </Redes>
      </Content>
    </Container>
  )
}

export default Sidebar

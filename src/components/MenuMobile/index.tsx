import { IoClose } from 'react-icons/io5'
import { Container } from './styles'

const MenuMobile = () => (
  <Container>
    <IoClose size={45} />
    <nav>
      <a href="#">Home</a>
      <a href="#">Sobre Nós</a>
      <a href="#">Onde Encontrar</a>
      <a href="#">Produtos</a>
      <a href="#">Suporte</a>
      <a href="#">Contato</a>
    </nav>
  </Container>
)

export default MenuMobile

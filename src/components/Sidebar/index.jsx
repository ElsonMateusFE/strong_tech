import { Container, Content, Opcao } from './styles'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  useEffect(() => {
    document.body.style.overflowY = active ? 'hidden' : 'auto'
  })

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
      </Content>
    </Container>
  )
}

export default Sidebar

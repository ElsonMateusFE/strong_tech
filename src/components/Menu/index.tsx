import { Opcao, Opcoes } from './styles'

const Menu = () => {
  return (
    <Opcoes>
      <li>
        <Opcao href="#">Home</Opcao>
      </li>
      <li>
        <Opcao href="#">Sobre Nós</Opcao>
      </li>
      <li>
        <Opcao href="#">Onde Encontrar</Opcao>
      </li>
      <li>
        <Opcao href="#">Produtos</Opcao>
      </li>
      <li>
        <Opcao href="#">Suporte</Opcao>
      </li>
      <li>
        <Opcao href="#">Contato</Opcao>
      </li>
    </Opcoes>
  )
}

export default Menu

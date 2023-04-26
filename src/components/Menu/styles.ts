import styled from 'styled-components'
import { cores } from '../../styles'

export const Opcoes = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Opcao = styled.a`
  color: ${cores.verdeEscuro};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  margin-right: 69px;
`

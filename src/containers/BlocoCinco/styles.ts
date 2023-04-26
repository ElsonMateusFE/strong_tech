import styled from 'styled-components'
import { Botao } from '../../components/Botao'

export const Bloco = styled.div`
  background-color: #f4f4f4;
  height: 516px;

  @media (max-width: 768px) {
    height: 100%;
    padding-top: 2em;
  }

  ${Botao} {
    margin-bottom: 2em;
  }

  div {
    display: flex;
    gap: 45px;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  img {
    width: 100%;
  }
`

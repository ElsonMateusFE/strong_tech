import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  background-color: #f4f4f4;
  padding: 55px 0;

  ${TituloEspecial} {
    font-size: 35px;
  }

  main {
    display: flex;
  }

  ul {
    display: flex;
    column-gap: 90px;
    margin: 28px auto;

    @media (max-width: 768px) {
      display: block;
      text-align: center;
    }

    li {
      text-align: center;

      a {
        text-decoration: none;
        font-size: 17px;
        font-weight: 600;
        color: #1241af;
      }

      @media (max-width: 768px) {
        padding: 10px 0;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 1921px) {
    column-gap: 190px;
  }

  img {
    width: 100%;
  }
`

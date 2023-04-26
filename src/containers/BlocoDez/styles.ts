import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  padding-top: 136px;

  ${TituloEspecial} {
    font-size: 35px;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    color: #1241af;
    text-align: center;
    margin-top: 39px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 65px;
  column-gap: 96px;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 1921px) {
    column-gap: 293px;
  }

  img {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1921px) {
      width: 100%;
    }
  }

  ul {
    display: flex;
    column-gap: 23px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

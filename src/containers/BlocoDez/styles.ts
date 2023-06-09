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
  align-items: center;
  justify-content: center;
  padding-top: 65px;
  column-gap: 96px;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 1920px) {
    column-gap: 343px;
  }

  img {
    height: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1920px) {
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

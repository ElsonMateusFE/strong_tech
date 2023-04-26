import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  height: 780px;
  padding-top: 136px;

  @media (max-width: 768px) {
    height: 100%;
    padding: 36px 0;
  }

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
  gap: 397px;
  align-items: center;
  padding-top: 65px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 100%;
  }

  ul {
    display: flex;
    gap: 23px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

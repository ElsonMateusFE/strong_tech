import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  height: 788px;
  background-color: #f4f4f4;
  padding: 55px 0;

  @media (max-width: 768px) {
    height: 100%;
  }

  ${TituloEspecial} {
    font-size: 35px;
  }

  ul {
    display: flex;
    width: 618px;
    margin: 28px auto;
    gap: 90px;

    @media (max-width: 768px) {
      margin: 12px auto;
      display: block;
      width: 100%;
      text-align: center;
    }

    li {
      a {
        text-decoration: none;
        font-size: 17px;
        font-weight: 600;
        color: #1241af;
      }

      @media (max-width: 768px) {
        padding: 10px;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 172px;

  @media (max-width: 768px) {
    display: block;
    margin-top: 30px;
  }

  img {
    width: 100%;
  }
`

import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  background-color: #f7f7f7;
  padding: 119px 0;

  @media (max-width: 768px) {
    padding: 50px 0;

    div {
      ${TituloEspecial} {
        margin-bottom: 32px;
        font-size: 35px;
        text-align: center;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 38px;

    @media (max-width: 768px) {
      display: block;
    }

    li {
      @media (max-width: 768px) {
        margin-top: 30px;
      }
    }
  }

  section {
    display: block;
    width: 774px;
    height: 290px;
    background-color: #ffffff;
    padding: 34px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      width: 290px;
      margin: auto;
      height: 100%;
    }

    img {
      height: 100%;
    }

    a {
      text-decoration: none;
      color: #1241af;
      font-size: 18px;
      font-weight: 600;
      display: block;

      @media (max-width: 768px) {
        margin-top: 1em;
      }
    }

    h3 {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 36px;
    }

    div {
      display: flex;

      @media (max-width: 768px) {
        display: block;
      }

      main {
        margin-left: 20px;

        @media (max-width: 768px) {
          margin: 20px 0;
        }
      }
    }
  }
`

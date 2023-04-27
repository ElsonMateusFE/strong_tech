import styled from 'styled-components'
import { TituloEspecial } from '../../styles'
import { Paragrafo } from '../../components/Paragrafo/styles'

export const Bloco = styled.div`
  margin: 0 auto;
  padding: 62px 0;

  @media (max-width: 768px) {
    display: block;
    width: 95%;
    height: 100%;
    padding-top: 31px;
    padding-bottom: 22px;

    ${TituloEspecial} {
      font-size: 35px;
    }
  }

  @media (min-width: 1024px) {
    width: 99%;
  }
`

export const ContainerDeExplore = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  @media (max-width: 768px) {
    display: block;
  }

  li {
    max-height: 384.5px;
    position: relative;

    @media (min-width: 1921px) {
      max-height: 490px;
    }

    @media (max-width: 768px) {
      max-height: 312px;
      margin-top: 0.6em;
    }

    img {
      width: 100%;
    }
  }
`

export const TituloSecundario = styled.h3`
  font-weight: 500;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const ContainerDeLegenda = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 40px;
  bottom: 0;
  left: 0;

  ${TituloSecundario} {
    padding: 10px 0;
  }

  ${Paragrafo} {
    padding-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`

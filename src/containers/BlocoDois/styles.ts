import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  max-width: 1871px;
  height: 609px;
  align-items: center;
  margin: 0 auto;
  padding-top: 62px;

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
    position: relative;
  }

  img {
    width: 100%;
  }
`

export const TituloPrimario = styled.h3`
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  margin: 50px 0;
`

export const TituloSecundario = styled.h3`
  font-weight: 500;
  font-size: 30px;
`

export const ContainerDeLegenda = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 40px;
  position: absolute;
  max-width: 100%;
  bottom: 0;
  gap: 10px;
  left: 0;
  opacity: 0;
  transition: all ease 0.5s;

  &:hover {
    opacity: 1;
  }
`

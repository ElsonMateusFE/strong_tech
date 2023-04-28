import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 250px;
  align-items: center;
  padding-top: 139px;
  padding-bottom: 103px;

  ${TituloEspecial} {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 3em 0;
  }
`

export const ContainerLegenda = styled.div`
  text-align: center;
`

export const ContainerIconsSuporte = styled.ul`
  li {
    display: flex;
    column-gap: 27px;

    @media (max-width: 768px) {
      row-gap: 2em;
      margin: 3em auto;
    }

    img {
      height: 100%;

      @media (max-width: 768px) {
        display: block;
        width: 42px;
        margin: auto;
        text-align: center;
      }
    }
  }
`

export const LinhaDeDivisao = styled.div`
  border-bottom: 1px solid black;
  margin: 27px 0;
`

export const TituloDosIcones = styled.h3`
  color: #1241af;
  font-weight: 600px;
  font-size: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 7px;
    font-size: 20px;
  }
`

import styled from 'styled-components'
import { TituloEspecial } from '../../styles'

export const Bloco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 139px;

  ${TituloEspecial} {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 3em auto;
  }
`

export const ContainerLegenda = styled.div`
  text-align: center;
`

export const ContainerIconsSuporte = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    gap: 47px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      gap: 2em;
      margin: 3em auto;
    }

    img {
      height: 100%;

      @media (max-width: 768px) {
        display: block;
        margin: auto;
        text-align: center;
      }
    }
  }
`

export const LinhaDeDivisao = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 46px;
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

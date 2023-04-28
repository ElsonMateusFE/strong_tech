import styled from 'styled-components'
import { cores } from '../../styles'

export const OpcoesIcones = styled.ul`
  display: flex;
  padding: 35px 0;
  max-width: 1080px;
  column-gap: 20px;
  text-align: center;
  align-items: center;
  margin: auto;

  @media (min-width: 1920px) {
    max-width: 1297px;
  }

  @media (max-width: 768px) {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    padding: 14px 0;
  }

  li {
    display: block;
    margin: 0 auto;

    img {
      height: 100%;

      @media (max-width: 768px) {
        width: 36px;
      }
    }

    p {
      font-family: Barlow;
      font-weight: 600;
      font-size: 20px;
      color: ${cores.verdeEscuro};

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`
export const Computadores = styled.div`
  margin-top: 5px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const Cpu = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const Gamer = styled.div`
  margin-top: 8px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const AllInOne = styled.div`
  margin-top: 17px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`
export const Pc = styled.div`
  margin-top: 5px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
export const Monitores = styled.div`
  margin-top: 6px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

export const Perifericos = styled.div`
  margin-top: 9px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

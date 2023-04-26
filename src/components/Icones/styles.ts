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

  @media (min-width: 1921px) {
    max-width: 1297px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  li {
    display: block;
    margin: 0 auto;

    p {
      font-family: Barlow;
      font-weight: 600;
      font-size: 20px;
      color: ${cores.verdeEscuro};
    }
  }
`
export const Computadores = styled.div`
  margin-top: 5px;
`

export const Cpu = styled.div`
  margin-top: 10px;
`

export const Gamer = styled.div`
  margin-top: 8px;
`

export const AllInOne = styled.div`
  margin-top: 17px;
`
export const Pc = styled.div`
  margin-top: 5px;
`
export const Monitores = styled.div`
  margin-top: 6px;
`

export const Perifericos = styled.div`
  margin-top: 9px;
`

import styled from 'styled-components'

type Props = {
  children: string
  fontSize?: number
  fontWeight?: boolean
  corDeTitulo?: boolean
}

export const TituloTag = styled.h3<Props>`
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-weight: 400;
  color: ${(props) => (props.corDeTitulo ? '#383838' : '#000000')};
  margin: 25px 0;
`

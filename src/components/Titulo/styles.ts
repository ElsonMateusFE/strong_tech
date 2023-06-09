import styled from 'styled-components'

type Props = {
  children: string
  fontSize?: number
  fontWeight?: boolean
  corDeTitulo?: boolean
}

export const Titulo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '35px')};

  @media (max-width: 768px) {
    font-size: 26px;
  }

  font-weight: ${(props) => (props.fontWeight ? '400' : '600')};
  color: ${(props) => (props.corDeTitulo ? '#383838' : '#000000')};
  margin: 25px 0;
`

import styled from 'styled-components'
import { Props } from '.'

export const Paragrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};

  @media (min-width: 1920px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16.5px;
  }

  color: ${(props) => (props.corParagrafo ? '#181818' : '#FFFFFF')};
  text-align: ${(props) => (props.textAlign ? 'center' : '')};
`

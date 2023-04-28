import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    position: absolute;
    top: 22px;
    left: 16px;
    color: #1a202c;
    height: 35px;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

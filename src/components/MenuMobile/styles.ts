import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    color: #1a202c;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

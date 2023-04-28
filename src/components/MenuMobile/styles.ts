import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    position: absolute;
    top: 28px;
    left: 16px;
    color: #1a202c;
    height: 35px;
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 0.6);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    position: absolute;
    top: 33px;
    left: 16px;
    color: rgb(233, 219, 219);
    height: 22px;
    width: 22px;
    cursor: pointer;

    &:hover {
      color: white;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    position: absolute;
    top: 30px;
    left: 16px;
    color: #1a202c;
    height: 27px;
    width: 27px;
    cursor: pointer;

    &:hover {
      color: #3b4b6c;
      // rgb(150, 122, 122)
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`

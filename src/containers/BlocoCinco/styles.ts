import styled from 'styled-components'

export const Bloco = styled.div`
  background-color: #f4f4f4;

  div {
    display: flex;
    column-gap: 45px;
    align-items: center;

    img {
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (min-width: 1921px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`

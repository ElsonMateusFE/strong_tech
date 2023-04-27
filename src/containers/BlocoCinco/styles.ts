import styled from 'styled-components'

export const Bloco = styled.div`
  background-image: linear-gradient(to right, white 50%, #f4f4f4 50%);

  div {
    display: flex;
    justify-content: center;
    column-gap: 45px;
    align-items: center;

    img {
      height: 100%;

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

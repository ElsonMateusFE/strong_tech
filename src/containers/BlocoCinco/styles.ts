import styled from 'styled-components'

export const Bloco = styled.div`
  background-image: linear-gradient(to right, white 50%, #f4f4f4 50%);

  main {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    background: #f4f4f4;
    padding-bottom: 10px;
  }

  div {
    display: flex;
    max-width: 1480px;
    justify-content: center;
    column-gap: 45px;
    align-items: center;

    @media (min-width: 1920px) {
      max-width: 1850px;
    }

    img {
      width: 100%;

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (min-width: 1920px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`

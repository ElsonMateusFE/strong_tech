import styled from 'styled-components'

export const Bloco = styled.section`
  div {
    flex-direction: row-reverse;
    justify-content: center;
    display: flex;
    column-gap: 259px;
    align-items: center;
    padding: 52px 0;

    @media (max-width: 768px) {
      display: block;
      padding: 32px 0;
    }

    @media (min-width: 1920px) {
      column-gap: 289px;
    }

    main {
      margin: auto;

      ul {
        display: flex;
        column-gap: 29px;

        @media (max-width: 768px) {
          display: block;
        }
      }
    }

    img {
      width: 40%;

      @media (min-width: 1920px) {
        width: 100%;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`

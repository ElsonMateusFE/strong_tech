import styled from 'styled-components'

export const Bloco = styled.div`
  display: block;
  background-color: #f4f4f4;

  div {
    column-gap: 40px;
    display: flex;
    justify-content: center;
    padding: 31px 0;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  img {
    width: 60%;

    @media (min-width: 1920px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`

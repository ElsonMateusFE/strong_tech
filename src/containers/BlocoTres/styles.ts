import styled from 'styled-components'

export const Bloco = styled.div`
  display: block;
  background-color: #f4f4f4;

  div {
    gap: 40px;
    display: flex;
    padding: 31px 0;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  img {
    width: 60%;

    @media (min-width: 1921px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`

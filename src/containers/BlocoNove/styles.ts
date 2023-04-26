import styled from 'styled-components'

export const Bloco = styled.section`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 25px;
  }

  div {
    margin-right: 80px;
    margin-left: 48px;

    @media (max-width: 768px) {
      margin: auto;
    }
  }

  img {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1921px) {
      width: 100%;
    }
  }
`

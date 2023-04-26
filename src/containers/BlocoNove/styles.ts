import styled from 'styled-components'

export const Bloco = styled.section`
  display: flex;
  heigth: 591px;
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
    width: 100%;
  }
`

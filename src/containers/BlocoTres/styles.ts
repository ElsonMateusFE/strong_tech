import styled from 'styled-components'

export const Bloco = styled.div`
  display: block;
  background-color: #f4f4f4;
  height: 609px;

  @media (max-width: 768px) {
    height: 100%;
  }

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
    width: 100%;
  }
`
